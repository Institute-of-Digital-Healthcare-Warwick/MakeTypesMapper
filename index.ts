#!/usr/bin/env node
import * as yargs from 'yargs';
import * as fs from 'fs';
import * as path from 'path';
import { StreamWriter, NopWriter, Emitter } from './lib/index';

/**
 * Parse command line arguments
 */
const argv = yargs.usage('Usage: $0 [options] inputFile rootName')
    .alias('i', 'interface-file')
    .string('i')
    .describe('i', 'Specify output file for interfaces')
    .alias('p', 'proxy-file')
    .string('p')
    .describe('p', 'Specity output file for TypeScript proxy classes')
    .help('h')
    .alias('h', 'help')
    .alias('jsr', 'ignore-java-script-reserved')
    .boolean('jsr')
    .describe('jsr', 'Ignore Java Script reserved words')
    .alias('tsr', 'ignore-type-script-reserved')
    .boolean('tsr')
    .describe('tsr', 'Ignore Type Script reserved words')
    .alias('tssr', 'ignore-type-script-strict')
    .boolean('tssr')
    .describe('tssr', 'Ignore Type Script strict mode reserved words')
    .alias('tscr', 'ignore-type-script-contextual')
    .boolean('tscr')
    .describe('tscr', 'Ignore Type Script contextual keywords')
    .alias('s', 'strict')
    .boolean('s')
    .describe('s', 'Ignore all reserved words and contextual keywords')
    .argv;

/**
 * Create a writer for the interfaces and proxies
 */
let interfaceWriter = new NopWriter();

/**
 * If the interface and proxy files are the same, only create one writer
 */
let proxyWriter = interfaceWriter;

// If the interface and proxy files are the same, make sure they are not the same file
if (argv.i && argv.p && path.resolve(argv.i) === path.resolve(argv.p)) {
    console.error(`Interfaces and proxies cannot be written to same file.`);
    yargs.showHelp();
    process.exit(1);
}
// If the interface file is specified, create a writer for it
if (argv.i) {
    interfaceWriter = new StreamWriter(fs.createWriteStream(argv.i));
}
// If the proxy file is specified, create a writer for it
if (argv.p) {
    proxyWriter = new StreamWriter(fs.createWriteStream(argv.p));
}
// If neither interface nor proxy file is specified, create a writer for stdout
if (argv._.length !== 2) {
    console.error(`Please supply an input file with samples in a JSON array, and a symbol to use for the root interface / proxy.`);
    yargs.showHelp();
    process.exit(1);
}

// Read the input file
const inputJson = JSON.parse(fs.readFileSync(argv._[0]).toString());

/**
 * List of reserved words in JavaScript
 */
const reservedJavaScriptWords = [
    'abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class',
    'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval',
    'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if',
    'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native',
    'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static',
    'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try',
    'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'
];

/**
 * List of reserved words in TypeScript
 */
const reservedTypeScriptWords = [
    'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
    'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'import',
    'in', 'instanceof', 'new', 'null', 'return', 'super', 'switch', 'this', 'throw', 'true',
    'try', 'typeof', 'var', 'void', 'while', 'with'
];

/**
 * List of strict mode reserved words in TypeScript
 */
const reservedTypeScriptStrictWords = [
    'as', 'implements', 'interface', 'let', 'package', 'private', 'protected', 'public', 'static', 'yield'
];

/**
 * List of TypeScript contextual keywords
 */
const reservedTypeScriptContextualWords = [
    'any', 'boolean', 'constructor', 'declare', 'get', 'module', 'require', 'namespace', 'number', 'set', 'string', 'symbol', 'type', 'from', 'of'
];

/**
 * Replace a character at the start of the string with char_,
 * the middle of the string with _char_ 
 * or the end of the string with _char
 */
function replaceNameChars(str: string, search: string, replacement: string): string {
    console.log(`replaceNameChars(${str}, ${search}, ${replacement})`);
    if (str.indexOf(search) === 0) {
        // Search is at the start of the string
        str = str.replace(search, replacement + '_');
    }
    if (str.lastIndexOf(search) === str.length - search.length) {
        // Search is at the end of the string
        str = str.replace(search, '_' + replacement);
    }
    if (str.indexOf(search) !== -1) {
        // Search is in the middle of the string
        str = str.replace(search, '_' + replacement + '_');
    }
    return str;
};

/**
 * Make incompatible object names like S:Body into S_Body to be valid TypeScript interface names
 * Make incompatible object names like 1 into _1 to be valid TypeScript interface names
 * Make incompatible object names like 1.2 into _1_2 to be valid TypeScript interface names
 */
function makeValidName(name: string): string {
    console.log(`makeValidName(${name})`);

    // Replace all non-alphanumeric characters
    let validName = name;
    validName = replaceNameChars(validName, '@', 'at');
    // replace $ with dollar_
    validName = replaceNameChars(validName, '$', 'dollar');
    // replace % with percent_
    validName = replaceNameChars(validName, '%', 'percent');
    // replace ^ with caret_
    validName = replaceNameChars(validName, '^', 'caret');
    // replace & with ampersand_
    validName = replaceNameChars(validName, '&', 'ampersand');
    // replace * with asterisk_
    validName = replaceNameChars(validName, '*', 'asterisk');
    // replace - with minus_
    validName = replaceNameChars(validName, '-', 'minus');
    // replace # with hash_
    validName = replaceNameChars(validName, '#', 'hash');
    // replace : with colon_
    validName = replaceNameChars(validName, ':', 'colon');
    // replace / with slash_
    validName = replaceNameChars(validName, '/', 'slash');
    // replace \ with backslash_
    validName = replaceNameChars(validName, '\\', 'backslash');
    // replace . with dot_
    validName = replaceNameChars(validName, '.', 'dot');
    // replace , with comma_
    validName = replaceNameChars(validName, ',', 'comma');
    // replace ? with question_
    validName = replaceNameChars(validName, '?', 'question');
    // replace ! with exclamation_
    validName = replaceNameChars(validName, '!', 'exclamation');
    // replace ~ with tilde_
    validName = replaceNameChars(validName, '~', 'tilde');

    console.log(`validName = ${validName}`);
    // make the name lowercase and remove underscores for checking against reserved words
    const standardName = validName.replace('_', '').toLowerCase();
    console.log(`standardName = ${standardName}`);

    // if the name is empty, throw an error
    if (!standardName) {
        throw new Error(`Invalid name: ${name}`);
    }

    // Other names to avoid for mapper
    if (!validName.startsWith('_')) {
        switch (standardName) {
            case 'text':
            case 'table':
                validName = '_' + validName;
                break;
        }
    }

    // make incompatible names like text and table valid
    // if we are ignoring Java Script reserved words or in strict mode
    if (argv.s || argv.jsr) {
        // change Java Script reserved words
        if (reservedJavaScriptWords.indexOf(standardName) !== -1) {
            validName = 'jsr' + validName;
        }
    }
    // if we are ignoring Type Script reserved words, strict mode reserved words, contextual keywords or in strict mode
    if (argv.s || argv.tsr || argv.tssr || argv.tscr) {
        // change TypeScript reserved words
        if (reservedTypeScriptWords.indexOf(standardName) !== -1) {
            validName = 'tsr' + validName;
        }
    }
    // if we are ignoring strict mode reserved words or Type Script contextual keywords or in strict mode
    if (argv.s || argv.tssr || argv.tscr) {
        // change TypeScript strict mode reserved words
        if (reservedTypeScriptStrictWords.indexOf(standardName) !== -1) {
            validName = 'tssr' + validName;
        }
    }
    // if we are ignoring Type Script contextual keywords or in strict mode
    if (argv.s || argv.tscr) {
        // change TypeScript contextual keywords
        if (reservedTypeScriptContextualWords.indexOf(standardName) !== -1) {
            validName = 'tscr' + validName;
        }
    }

    console.log(`validName = ${validName}`);
    return validName;
}

/**
 * Recursively make all object keys valid TypeScript interface names
 * 
 * @param obj 
 * @returns 
 */
function makeValidNames(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(makeValidNames);
    }
    if (typeof obj === 'object') {
        const result: any = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[makeValidName(key)] = makeValidNames(obj[key]);
            }
        }
        return result;
    }
    return obj;
}

// Convert all object keys to valid TypeScript interface names
const convertedJson = makeValidNames(inputJson);

// Emit the interfaces and proxies
const e = new Emitter(interfaceWriter, proxyWriter);
e.emit(convertedJson, argv._[1]);
// write the valid JSON to a file
fs.writeFileSync('./valid.json', JSON.stringify(convertedJson, null, 4));
