export interface OsakiFullPatient {
  patient: Patient;
  prescriptions: Prescriptions;
  labResults?: (LabResultsEntity)[] | null;
  conditions: Conditions;
  observations: Observations;
}
export interface Patient {
  listaPacienteVO: ListaPacienteVO;
}
export interface ListaPacienteVO {
  pacienteVO?: (PacienteVOEntity)[] | null;
}
export interface PacienteVOEntity {
  cic: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  sexo: Sexo;
  idioma: Idioma;
  fechaNacimiento: string;
  paisNacimiento: string;
  dni: string;
  tisnumerica: string;
  tipoTis: TipoTis;
  nas: string;
  codsns: string;
  email: string;
  situacion: Situacion;
  baja: boolean;
  datosAseguramiento: DatosAseguramiento;
  listaTelefonos: ListaTelefonos;
  domicilio: Domicilio;
  cuposPaciente: CuposPaciente;
  indEnvioSMS: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  indConfidencial: number;
  telefonoEnvioSMS: string;
}
export interface Sexo {
  codSexo: string;
  descripcion: string;
}
export interface Idioma {
  codIdioma: string;
  codIso: string;
  descripcion: string;
}
export interface TipoTis {
  codTipoTis: string;
  descripcion: string;
}
export interface Situacion {
  codSituacion: string;
  descripcion: string;
}
export interface DatosAseguramiento {
  tipoPoblacion: TipoPoblacion;
  tipoTemporalidad: TipoTemporalidad;
  titularidad: Titularidad;
  tipoCiudadano: TipoCiudadano;
  titulo: Titulo;
  indicadorFarmacia: string;
  cobertura: Cobertura;
}
export interface TipoPoblacion {
  codTipoPoblacion: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface TipoTemporalidad {
  codTipoTemporalidad: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface Titularidad {
  codTitularidad: string;
  descripcion: string;
}
export interface TipoCiudadano {
  codTipoCiudadano: number;
  descripcionCas: string;
  descripcionEus: string;
  pensionista: boolean;
  universalizado: boolean;
  farmaciaGratuita: boolean;
  facturable: boolean;
}
export interface Titulo {
  codTitulo: string;
  codTipoTitulo: number;
  descripcionCas: string;
  descripcionEus: string;
}
export interface Cobertura {
  codCobertura: string;
}
export interface ListaTelefonos {
  telefonos?: (TelefonosEntity)[] | null;
}
export interface TelefonosEntity {
  bdIndiceTelefono: number;
  strNumTelefono: string;
  strObservaciones: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal {
}
export interface Domicilio {
  portal: Portal;
  piso: string;
  mano: string;
  pais: Pais;
  otrosDatos: string;
  bloque: string;
  numPortal: string;
  codPostal: string;
}
export interface Portal {
  idPortal: number;
  numero: number;
  bis: string;
  tipoPortal: string;
  idEdificio: number;
  idBloque: string;
  eje: number;
  tramo: Tramo;
  calle: Calle;
  coordenadas: Coordenadas;
}
export interface Tramo {
  idTramo: number;
  codigoTramo: string;
  codPostal: string;
  numDesde: number;
  numHasta: number;
  tipoNumeracion: string;
  barrio: Barrio;
  seccion: Seccion;
  localidad: Localidad;
}
export interface Barrio {
  idBarrio: number;
  codigoBarrio: string;
  descripcionOficial: string;
  descripcionEus: string;
}
export interface Seccion {
  idSeccion: number;
  codigoSeccion: string;
  distrito: Distrito;
}
export interface Distrito {
  idDistrito: number;
  codigoDistrito: string;
}
export interface Localidad {
  idLocalidad: number;
  codigoLocalidad: string;
  descripcionOficial: string;
  municipio: Municipio;
}
export interface Municipio {
  codMunicipio: string;
  descripcionOficial: string;
  descripcionCas: string;
  comarca: Comarca;
  provincia: Provincia;
}
export interface Comarca {
  codigoComarca: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
}
export interface Provincia {
  codProvincia: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
  baja: boolean;
  autonomia: Autonomia;
}
export interface Autonomia {
  codAutonomia: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
  baja: boolean;
}
export interface Calle {
  idCalle: number;
  codigoCalle: number;
  descripcionOficial: string;
  tipoVia: TipoVia;
}
export interface TipoVia {
  idTipoVia: string;
  descripcion: string;
  descripcionReducidaEus: string;
  descripcionAbrevEus: string;
  descripcionReducidaCas: string;
  descripcionAbrevCas: string;
}
export interface Coordenadas {
  xEd50: number;
  xEtrs89: number;
  yEd50: number;
  yEtrs89: number;
}
export interface Pais {
  idPais: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
}
export interface CuposPaciente {
  centro: Centro;
  uap: Uap;
  cupoMedico: CupoMedico;
}
export interface Centro {
  codCentro: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface Uap {
  codUap: string;
  descripcionCas: string;
  codOsi: string;
  descAbrev: string;
}
export interface CupoMedico {
  codCupo: string;
  tipoCupo: number;
  profesional: Profesional;
  especialidad: Especialidad;
}
export interface Profesional {
  codProf: number;
  codGizabide: number;
  dni: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
}
export interface Especialidad {
  codSeccion: number;
  descripcionCast: string;
  descripcionEus: string;
  codServicio: number;
  descripcionServCast: string;
  descripcionServEus: string;
}
export interface Prescriptions {
  xml: Xml;
  S:Envelope: S:Envelope;
}
export interface Xml {
  @version: number;
  @encoding: string;
}
export interface S:Envelope {
  @xmlns:S: string;
  S:Body: S:Body;
}
export interface S:Body {
  ns2:prescripcion_v6: Ns2:prescripcionV6;
}
export interface Ns2:prescripcionV6 {
  @xmlns:ns2: string;
  ns2:prescripciones_v6?: (Ns2:prescripcionesV6Entity)[] | null;
}
export interface Ns2:prescripcionesV6Entity {
  ns2:idPrescripcion: number;
  ns2:estado: string;
  ns2:tipo: string;
  ns2:nombreProducto: string;
  ns2:listaPrincipiosActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:listaPrincipiosActivosIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:codVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:nombreVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:nombreViaIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitual: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:fechaInicio: string;
  ns2:fechaRevision?: string | null;
  ns2:fechaProxRecogida: string;
  ns2:tipoAtencion: string;
  ns2:seguimientoAE: string;
  ns2:prescriptorIdUnico: string;
  ns2:prescriptorApellido1: string;
  ns2:prescriptorApellido2: string;
  ns2:prescriptorNombre: string;
  ns2:creditoAdicional: boolean;
  ns2:estupefaciente: boolean;
  ns2:tipoElementoPrescrito: string;
  ns2:codigoPrescrito: number;
  ns2:pautaHabitualPacES: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitualPacEU: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitualPacIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:codATC: string;
  ns2:desATC: string;
  ns2:codForma: string;
  ns2:descripcionForma: string;
  ns2:descripcionFormaIng: string;
  ns2:listaCodPActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:dosisValor?: number | null;
  ns2:dosisUnidad?: string | null;
  ns2:estadoVisado?: string | null;
  ns2:fechaFinalizacion?: string | null;
}
export interface LabResultsEntity {
  FechaResultado: string;
  IdPrueba: string;
  Resultado: string;
  descPrueba: string;
}
export interface Conditions {
  @xmlns:a: string;
  @xmlns:i: string;
  a:CIC: number;
  a:HCR_CDA: A:HCRCDA;
  a:HCR_PDF: string;
}
export interface A:HCRCDA {
  ClinicalDocument: ClinicalDocument;
}
export interface ClinicalDocument {
  @xmlns:xsi: string;
  _at_xsi:schemaLocation: string;
  @xmlns:voc: string;
  @xmlns: string;
  typeId: TypeId;
  templateId: IdOrTemplateIdOrTemplateIdEntity;
  id: IdOrSetId;
  code: CodeOrRouteCode;
  title: string;
  effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  confidentialityCode: AdministrativeGenderCodeOrConfidentialityCode;
  languageCode: SignatureCodeOrLanguageCode;
  setId: IdOrSetId;
  versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  recordTarget: RecordTarget;
  author: Author;
  informant: IdOrTextOrCodeOrInformant;
  custodian: Custodian;
  legalAuthenticator: LegalAuthenticator;
  documentationOf: DocumentationOf;
  relatedDocument: RelatedDocument;
  component: Component;
}
export interface TypeId {
  @root: string;
  @extension: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface IdOrTemplateIdOrTemplateIdEntity {
  @root: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface IdOrSetId {
  @root: string;
  @extension: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface CodeOrRouteCode {
  @code: string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface AdministrativeGenderCodeOrConfidentialityCode {
  @code: string;
  @codeSystem: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface SignatureCodeOrLanguageCode {
  @code: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface RecordTarget {
  patientRole: PatientRole;
}
export interface PatientRole {
  id?: (IdEntity)[] | null;
  addr: Addr;
  telecom: TelecomOrReference;
  patient: Patient1;
  providerOrganization: ProviderOrganization;
}
export interface IdEntity {
  @root?: string | null;
  @extension?: number | string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @nullFlavor?: string | null;
}
export interface Addr {
  @use: string;
  state: string;
  city: string;
  postalCode: number;
  streetNameType: string;
  streetName: string;
  houseNumber: number;
  additionalLocator?: (number | string)[] | null;
}
export interface TelecomOrReference {
  @value: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Patient1 {
  name: Name;
  administrativeGenderCode: AdministrativeGenderCodeOrConfidentialityCode;
  birthTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface Name {
  family?: (string)[] | null;
  given: string;
}
export interface ProviderOrganization {
  name: string;
}
export interface Author {
  time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  assignedAuthor: AssignedAuthor;
}
export interface AssignedAuthor {
  id: IdOrTemplateIdOrTemplateIdEntity;
  assignedAuthoringDevice: AssignedAuthoringDevice;
}
export interface AssignedAuthoringDevice {
  code: CodeOrRouteCode;
  softwareName: string;
}
export interface IdOrTextOrCodeOrInformant {
  @nullFlavor: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Custodian {
  assignedCustodian: AssignedCustodian;
}
export interface AssignedCustodian {
  @classCode: string;
  representedCustodianOrganization: RepresentedCustodianOrganization;
}
export interface RepresentedCustodianOrganization {
  @classCode: string;
  @determinerCode: string;
  id: IdOrTemplateIdOrTemplateIdEntity;
  name: string;
}
export interface LegalAuthenticator {
  time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  signatureCode: SignatureCodeOrLanguageCode;
  assignedEntity: AssignedEntity;
}
export interface AssignedEntity {
  id: IdOrTextOrCodeOrInformant;
}
export interface DocumentationOf {
  serviceEvent: ServiceEvent;
}
export interface ServiceEvent {
  effectiveTime: EffectiveTime;
}
export interface EffectiveTime {
  high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface RelatedDocument {
  @typeCode: string;
  parentDocument: ParentDocument;
}
export interface ParentDocument {
  id: IdOrSetId;
  setId: IdOrSetId;
  versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface Component {
  structuredBody: StructuredBody;
}
export interface StructuredBody {
  component?: (ComponentEntity)[] | null;
}
export interface ComponentEntity {
  templateId: IdOrTemplateIdOrTemplateIdEntity;
  section: Section;
}
export interface Section {
  title: string;
  _text: string | ;
  code?: Code | null;
  entry?: (EntryEntity)[] | null | 1;
}
export interface  {
  list?: List | null;
  _table?: Table | null;
}
export interface List {
  item?: (string | ItemEntityOrItem)[] | null | ItemEntityOrItem;
}
export interface ItemEntityOrItem {
  @ID: string;
  #text: string;
}
export interface Table {
  thead: Thead;
  tbody: Tbody;
}
export interface Thead {
  tr?: (TrEntity)[] | null;
}
export interface TrEntity {
  th?: (string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal | string)[] | null;
}
export interface Tbody {
  tr?: (TrEntity1)[] | null;
}
export interface TrEntity1 {
  td?: (2 | string | 2 | string | 2 | string | 2 | string | 2 | string | 2 | string | 2 | string)[] | null;
}
export interface 2 {
  list: List1;
}
export interface List1 {
  item: string;
}
export interface Code {
  @code: string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName?: string | null;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface EntryEntity {
  observation?: Observation | null;
  @typeCode?: string | null;
  @contextConductionInd?: boolean | null;
  substanceAdministration?: SubstanceAdministration | null;
}
export interface Observation {
  @classCode: string;
  @moodCode: string;
  code: CodeOrRouteCode;
  effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  value: Value;
}
export interface Value {
  @xsi:type: string;
  @code?: number | string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName: string;
  originalText: OriginalText;
}
export interface OriginalText {
  reference: TelecomOrReference;
}
export interface SubstanceAdministration {
  @classCode: string;
  @moodCode: string;
  templateId?: (IdOrTemplateIdOrTemplateIdEntity)[] | null;
  id: IdOrSetId;
  _text: IdOrTextOrCodeOrInformant;
  effectiveTime?: (EffectiveTimeEntity)[] | null;
  routeCode: CodeOrRouteCode;
  doseQuantity: DoseQuantity;
  consumable: Consumable;
}
export interface EffectiveTimeEntity {
  @xsi:type: string;
  low?: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1 | null;
  high?: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2 | null;
  _at_operator?: string | null;
  period?: Period | null;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1 {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2 {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Period {
  @unit: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface DoseQuantity {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @unit?: string | null;
}
export interface Consumable {
  manufacturedProduct: ManufacturedProduct;
}
export interface ManufacturedProduct {
  @classCode: string;
  manufacturedMaterial: ManufacturedMaterial;
}
export interface ManufacturedMaterial {
  @classCode: string;
  @determinerCode: string;
  code: CodeOrRouteCode;
}
export interface 1 {
  observation: Observation1;
}
export interface Observation1 {
  @classCode: string;
  @moodCode: string;
  code: Code1;
  value: Value1;
}
export interface Code1 {
  @code?: string | null;
  @codeSystem?: string | null;
  @codeSystemName?: string | null;
  @displayName?: string | null;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @nullFlavor?: string | null;
}
export interface Value1 {
  @xsi:type: string;
  @displayName: string;
  originalText: OriginalText;
}
export interface Observations {
  ListaRICs?: (ListaRICsEntity)[] | null;
  NumPagina: number;
  Status: number;
  TotalResultado: number;
}
export interface ListaRICsEntity {
  IdRIC: number;
  ListaRICValor?: (ListaRICValorEntity)[] | null;
}
export interface ListaRICValorEntity {
  ElementoCatalogo: number;
  FechaMedicion: string;
  FechaRegistro: string;
  IdIdioma: number;
  IdProcedencia: number;
  ProfesionalRegistro: string;
  PuntuacionTotal?: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1 | null;
  Tipo: number;
  TipoDato: number;
  UnidadMedida: string;
  Valor: string;
  PuntuacionTo2023-12-04T13:32:27.087742367Z tal?: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2 | null;
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1 {
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2 {
}
export interface ConvertedJson.json {
  patient: Patient;
  prescriptions: Prescriptions1;
  labResults?: (LabResultsEntity)[] | null;
  conditions: Conditions1;
  observations: Observations;
}
export interface Patient {
  listaPacienteVO: ListaPacienteVO;
}
export interface ListaPacienteVO {
  pacienteVO?: (PacienteVOEntity)[] | null;
}
export interface PacienteVOEntity {
  cic: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  sexo: Sexo;
  idioma: Idioma;
  fechaNacimiento: string;
  paisNacimiento: string;
  dni: string;
  tisnumerica: string;
  tipoTis: TipoTis;
  nas: string;
  codsns: string;
  email: string;
  situacion: Situacion;
  baja: boolean;
  datosAseguramiento: DatosAseguramiento;
  listaTelefonos: ListaTelefonos;
  domicilio: Domicilio;
  cuposPaciente: CuposPaciente;
  indEnvioSMS: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  indConfidencial: number;
  telefonoEnvioSMS: string;
}
export interface Sexo {
  codSexo: string;
  descripcion: string;
}
export interface Idioma {
  codIdioma: string;
  codIso: string;
  descripcion: string;
}
export interface TipoTis {
  codTipoTis: string;
  descripcion: string;
}
export interface Situacion {
  codSituacion: string;
  descripcion: string;
}
export interface DatosAseguramiento {
  tipoPoblacion: TipoPoblacion;
  tipoTemporalidad: TipoTemporalidad;
  titularidad: Titularidad;
  tipoCiudadano: TipoCiudadano;
  titulo: Titulo;
  indicadorFarmacia: string;
  cobertura: Cobertura;
}
export interface TipoPoblacion {
  codTipoPoblacion: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface TipoTemporalidad {
  codTipoTemporalidad: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface Titularidad {
  codTitularidad: string;
  descripcion: string;
}
export interface TipoCiudadano {
  codTipoCiudadano: number;
  descripcionCas: string;
  descripcionEus: string;
  pensionista: boolean;
  universalizado: boolean;
  farmaciaGratuita: boolean;
  facturable: boolean;
}
export interface Titulo {
  codTitulo: string;
  codTipoTitulo: number;
  descripcionCas: string;
  descripcionEus: string;
}
export interface Cobertura {
  codCobertura: string;
}
export interface ListaTelefonos {
  telefonos?: (TelefonosEntity)[] | null;
}
export interface TelefonosEntity {
  bdIndiceTelefono: number;
  strNumTelefono: string;
  strObservaciones: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal {
}
export interface Domicilio {
  portal: Portal;
  piso: string;
  mano: string;
  pais: Pais;
  otrosDatos: string;
  bloque: string;
  numPortal: string;
  codPostal: string;
}
export interface Portal {
  idPortal: number;
  numero: number;
  bis: string;
  tipoPortal: string;
  idEdificio: number;
  idBloque: string;
  eje: number;
  tramo: Tramo;
  calle: Calle;
  coordenadas: Coordenadas;
}
export interface Tramo {
  idTramo: number;
  codigoTramo: string;
  codPostal: string;
  numDesde: number;
  numHasta: number;
  tipoNumeracion: string;
  barrio: Barrio;
  seccion: Seccion;
  localidad: Localidad;
}
export interface Barrio {
  idBarrio: number;
  codigoBarrio: string;
  descripcionOficial: string;
  descripcionEus: string;
}
export interface Seccion {
  idSeccion: number;
  codigoSeccion: string;
  distrito: Distrito;
}
export interface Distrito {
  idDistrito: number;
  codigoDistrito: string;
}
export interface Localidad {
  idLocalidad: number;
  codigoLocalidad: string;
  descripcionOficial: string;
  municipio: Municipio;
}
export interface Municipio {
  codMunicipio: string;
  descripcionOficial: string;
  descripcionCas: string;
  comarca: Comarca;
  provincia: Provincia;
}
export interface Comarca {
  codigoComarca: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
}
export interface Provincia {
  codProvincia: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
  baja: boolean;
  autonomia: Autonomia;
}
export interface Autonomia {
  codAutonomia: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
  baja: boolean;
}
export interface Calle {
  idCalle: number;
  codigoCalle: number;
  descripcionOficial: string;
  tipoVia: TipoVia;
}
export interface TipoVia {
  idTipoVia: string;
  descripcion: string;
  descripcionReducidaEus: string;
  descripcionAbrevEus: string;
  descripcionReducidaCas: string;
  descripcionAbrevCas: string;
}
export interface Coordenadas {
  xEd50: number;
  xEtrs89: number;
  yEd50: number;
  yEtrs89: number;
}
export interface Pais {
  idPais: string;
  descripcionOficial: string;
  descripcionCas: string;
  descripcionEus: string;
}
export interface CuposPaciente {
  centro: Centro;
  uap: Uap;
  cupoMedico: CupoMedico;
}
export interface Centro {
  codCentro: number;
  descripcionCas: string;
  descripcionEus: string;
  descAbrev: string;
}
export interface Uap {
  codUap: string;
  descripcionCas: string;
  codOsi: string;
  descAbrev: string;
}
export interface CupoMedico {
  codCupo: string;
  tipoCupo: number;
  profesional: Profesional;
  especialidad: Especialidad;
}
export interface Profesional {
  codProf: number;
  codGizabide: number;
  dni: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
}
export interface Especialidad {
  codSeccion: number;
  descripcionCast: string;
  descripcionEus: string;
  codServicio: number;
  descripcionServCast: string;
  descripcionServEus: string;
}
export interface Prescriptions1 {
  xml: Xml;
  S:Envelope: S:Envelope1;
}
export interface Xml {
  @version: number;
  @encoding: string;
}
export interface S:Envelope1 {
  @xmlns:S: string;
  S:Body: S:Body1;
}
export interface S:Body1 {
  ns2:prescripcion_v6: Ns2:prescripcionV61;
}
export interface Ns2:prescripcionV61 {
  @xmlns:ns2: string;
  ns2:prescripciones_v6?: (Ns2:prescripcionesV6Entity1)[] | null;
}
export interface Ns2:prescripcionesV6Entity1 {
  ns2:idPrescripcion: number;
  ns2:estado: string;
  ns2:tipo: string;
  ns2:nombreProducto: string;
  ns2:listaPrincipiosActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:listaPrincipiosActivosIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:codVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:nombreVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:nombreViaIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitual: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:fechaInicio: string;
  ns2:fechaRevision?: string | null;
  ns2:fechaProxRecogida: string;
  ns2:tipoAtencion: string;
  ns2:seguimientoAE: string;
  ns2:prescriptorIdUnico: string;
  ns2:prescriptorApellido1: string;
  ns2:prescriptorApellido2: string;
  ns2:prescriptorNombre: string;
  ns2:creditoAdicional: boolean;
  ns2:estupefaciente: boolean;
  ns2:tipoElementoPrescrito: string;
  ns2:codigoPrescrito: number;
  ns2:pautaHabitualPacES: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitualPacEU: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:pautaHabitualPacIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:codATC: string;
  ns2:desATC: string;
  ns2:codForma: string;
  ns2:descripcionForma: string;
  ns2:descripcionFormaIng: string;
  ns2:listaCodPActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  ns2:dosisValor?: number | null;
  ns2:dosisUnidad?: string | null;
  ns2:estadoVisado?: string | null;
  ns2:fechaFinalizacion?: string | null;
}
export interface LabResultsEntity {
  FechaResultado: string;
  IdPrueba: string;
  Resultado: string;
  descPrueba: string;
}
export interface Conditions1 {
  @xmlns:a: string;
  @xmlns:i: string;
  a:CIC: number;
  a:HCR_CDA: A:HCRCDA1;
  a:HCR_PDF: string;
}
export interface A:HCRCDA1 {
  ClinicalDocument: ClinicalDocument1;
}
export interface ClinicalDocument1 {
  @xmlns:xsi: string;
  _at_xsi:schemaLocation: string;
  @xmlns:voc: string;
  @xmlns: string;
  typeId: TypeId;
  templateId: IdOrTemplateIdOrTemplateIdEntity;
  id: IdOrSetId;
  code: CodeOrRouteCode;
  title: string;
  effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  confidentialityCode: AdministrativeGenderCodeOrConfidentialityCode;
  languageCode: SignatureCodeOrLanguageCode;
  setId: IdOrSetId;
  versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  recordTarget: RecordTarget1;
  author: Author;
  informant: IdOrTextOrCodeOrInformant;
  custodian: Custodian;
  legalAuthenticator: LegalAuthenticator;
  documentationOf: DocumentationOf;
  relatedDocument: RelatedDocument;
  component: Component1;
}
export interface TypeId {
  @root: string;
  @extension: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface IdOrTemplateIdOrTemplateIdEntity {
  @root: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface IdOrSetId {
  @root: string;
  @extension: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface CodeOrRouteCode {
  @code: string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface AdministrativeGenderCodeOrConfidentialityCode {
  @code: string;
  @codeSystem: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface SignatureCodeOrLanguageCode {
  @code: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface RecordTarget1 {
  patientRole: PatientRole1;
}
export interface PatientRole1 {
  id?: (IdEntity1)[] | null;
  addr: Addr1;
  telecom: TelecomOrReference;
  patient: Patient1;
  providerOrganization: ProviderOrganization;
}
export interface IdEntity1 {
  @root?: string | null;
  @extension?: number | string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @nullFlavor?: string | null;
}
export interface Addr1 {
  @use: string;
  state: string;
  city: string;
  postalCode: number;
  streetNameType: string;
  streetName: string;
  houseNumber: number;
  additionalLocator?: (number | string)[] | null;
}
export interface TelecomOrReference {
  @value: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Patient1 {
  name: Name;
  administrativeGenderCode: AdministrativeGenderCodeOrConfidentialityCode;
  birthTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface Name {
  family?: (string)[] | null;
  given: string;
}
export interface ProviderOrganization {
  name: string;
}
export interface Author {
  time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  assignedAuthor: AssignedAuthor;
}
export interface AssignedAuthor {
  id: IdOrTemplateIdOrTemplateIdEntity;
  assignedAuthoringDevice: AssignedAuthoringDevice;
}
export interface AssignedAuthoringDevice {
  code: CodeOrRouteCode;
  softwareName: string;
}
export interface IdOrTextOrCodeOrInformant {
  @nullFlavor: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Custodian {
  assignedCustodian: AssignedCustodian;
}
export interface AssignedCustodian {
  @classCode: string;
  representedCustodianOrganization: RepresentedCustodianOrganization;
}
export interface RepresentedCustodianOrganization {
  @classCode: string;
  @determinerCode: string;
  id: IdOrTemplateIdOrTemplateIdEntity;
  name: string;
}
export interface LegalAuthenticator {
  time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  signatureCode: SignatureCodeOrLanguageCode;
  assignedEntity: AssignedEntity;
}
export interface AssignedEntity {
  id: IdOrTextOrCodeOrInformant;
}
export interface DocumentationOf {
  serviceEvent: ServiceEvent;
}
export interface ServiceEvent {
  effectiveTime: EffectiveTime;
}
export interface EffectiveTime {
  high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface RelatedDocument {
  @typeCode: string;
  parentDocument: ParentDocument;
}
export interface ParentDocument {
  id: IdOrSetId;
  setId: IdOrSetId;
  versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
}
export interface Component1 {
  structuredBody: StructuredBody1;
}
export interface StructuredBody1 {
  component?: (ComponentEntity1)[] | null;
}
export interface ComponentEntity1 {
  templateId: IdOrTemplateIdOrTemplateIdEntity;
  section: Section1;
}
export interface Section1 {
  title: string;
  _text: string | 3;
  code?: Code2 | null;
  entry?: (EntryEntity1)[] | null | 1;
}
export interface 3 {
  list?: List2 | null;
  _table?: Table1 | null;
}
export interface List2 {
  item?: (string | ItemEntityOrItem)[] | null | ItemEntityOrItem;
}
export interface ItemEntityOrItem {
  @ID: string;
  #text: string;
}
export interface Table1 {
  thead: Thead1;
  tbody: Tbody1;
}
export interface Thead1 {
  tr?: (TrEntity2)[] | null;
}
export interface TrEntity2 {
  th?: (string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal | string)[] | null;
}
export interface Tbody1 {
  tr?: (TrEntity3)[] | null;
}
export interface TrEntity3 {
  td?: (2 | string | 2 | string | 2 | string | 2 | string | 2 | string | 2 | string | 2 | string)[] | null;
}
export interface 2 {
  list: List1;
}
export interface List1 {
  item: string;
}
export interface Code2 {
  @code: string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName?: string | null;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface EntryEntity1 {
  observation?: Observation2 | null;
  @typeCode?: string | null;
  @contextConductionInd?: boolean | null;
  substanceAdministration?: SubstanceAdministration1 | null;
}
export interface Observation2 {
  @classCode: string;
  @moodCode: string;
  code: CodeOrRouteCode;
  effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity;
  value: Value2;
}
export interface Value2 {
  @xsi:type: string;
  @code?: number | string;
  @codeSystem: string;
  @codeSystemName: string;
  @displayName: string;
  originalText: OriginalText;
}
export interface OriginalText {
  reference: TelecomOrReference;
}
export interface SubstanceAdministration1 {
  @classCode: string;
  @moodCode: string;
  templateId?: (IdOrTemplateIdOrTemplateIdEntity)[] | null;
  id: IdOrSetId;
  _text: IdOrTextOrCodeOrInformant;
  effectiveTime?: (EffectiveTimeEntity)[] | null;
  routeCode: CodeOrRouteCode;
  doseQuantity: DoseQuantity;
  consumable: Consumable;
}
export interface EffectiveTimeEntity {
  @xsi:type: string;
  low?: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1 | null;
  high?: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2 | null;
  _at_operator?: string | null;
  period?: Period | null;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1 {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2 {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface Period {
  @unit: string;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
}
export interface DoseQuantity {
  @value: number;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @unit?: string | null;
}
export interface Consumable {
  manufacturedProduct: ManufacturedProduct;
}
export interface ManufacturedProduct {
  @classCode: string;
  manufacturedMaterial: ManufacturedMaterial;
}
export interface ManufacturedMaterial {
  @classCode: string;
  @determinerCode: string;
  code: CodeOrRouteCode;
}
export interface 1 {
  observation: Observation1;
}
export interface Observation1 {
  @classCode: string;
  @moodCode: string;
  code: Code1;
  value: Value1;
}
export interface Code1 {
  @code?: string | null;
  @codeSystem?: string | null;
  @codeSystemName?: string | null;
  @displayName?: string | null;
  #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  @nullFlavor?: string | null;
}
export interface Value1 {
  @xsi:type: string;
  @displayName: string;
  originalText: OriginalText;
}
export interface Observations {
  ListaRICs?: (ListaRICsEntity)[] | null;
  NumPagina: number;
  Status: number;
  TotalResultado: number;
}
export interface ListaRICsEntity {
  IdRIC: number;
  ListaRICValor?: (ListaRICValorEntity)[] | null;
}
export interface ListaRICValorEntity {
  ElementoCatalogo: number;
  FechaMedicion: string;
  FechaRegistro: string;
  IdIdioma: number;
  IdProcedencia: number;
  ProfesionalRegistro: string;
  PuntuacionTotal?: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1 | null;
  Tipo: number;
  TipoDato: number;
  UnidadMedida: string;
  Valor: string;
  PuntuacionTo2023-12-04T13:32:27.087742367Z tal?: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2 | null;
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1 {
}
export interface StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2 {
}
