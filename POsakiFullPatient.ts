// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class OsakiFullPatientProxy {
  public readonly patient: PatientProxy;
  public readonly prescriptions: PrescriptionsProxy;
  public readonly labResults: LabResultsEntityProxy[] | null;
  public readonly conditions: ConditionsProxy;
  public readonly observations: ObservationsProxy;
  public static Parse(d: string): OsakiFullPatientProxy {
    return OsakiFullPatientProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OsakiFullPatientProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.patient = PatientProxy.Create(d.patient, field + ".patient");
    d.prescriptions = PrescriptionsProxy.Create(d.prescriptions, field + ".prescriptions");
    checkArray(d.labResults, field + ".labResults");
    if (d.labResults) {
      for (let i = 0; i < d.labResults.length; i++) {
        d.labResults[i] = LabResultsEntityProxy.Create(d.labResults[i], field + ".labResults" + "[" + i + "]");
      }
    }
    if (d.labResults === undefined) {
      d.labResults = null;
    }
    d.conditions = ConditionsProxy.Create(d.conditions, field + ".conditions");
    d.observations = ObservationsProxy.Create(d.observations, field + ".observations");
    return new OsakiFullPatientProxy(d);
  }
  private constructor(d: any) {
    this.patient = d.patient;
    this.prescriptions = d.prescriptions;
    this.labResults = d.labResults;
    this.conditions = d.conditions;
    this.observations = d.observations;
  }
}

export class PatientProxy {
  public readonly listaPacienteVO: ListaPacienteVOProxy;
  public static Parse(d: string): PatientProxy {
    return PatientProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PatientProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.listaPacienteVO = ListaPacienteVOProxy.Create(d.listaPacienteVO, field + ".listaPacienteVO");
    return new PatientProxy(d);
  }
  private constructor(d: any) {
    this.listaPacienteVO = d.listaPacienteVO;
  }
}

export class ListaPacienteVOProxy {
  public readonly pacienteVO: PacienteVOEntityProxy[] | null;
  public static Parse(d: string): ListaPacienteVOProxy {
    return ListaPacienteVOProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaPacienteVOProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.pacienteVO, field + ".pacienteVO");
    if (d.pacienteVO) {
      for (let i = 0; i < d.pacienteVO.length; i++) {
        d.pacienteVO[i] = PacienteVOEntityProxy.Create(d.pacienteVO[i], field + ".pacienteVO" + "[" + i + "]");
      }
    }
    if (d.pacienteVO === undefined) {
      d.pacienteVO = null;
    }
    return new ListaPacienteVOProxy(d);
  }
  private constructor(d: any) {
    this.pacienteVO = d.pacienteVO;
  }
}

export class PacienteVOEntityProxy {
  public readonly cic: number;
  public readonly nombre: string;
  public readonly apellido1: string;
  public readonly apellido2: string;
  public readonly sexo: SexoProxy;
  public readonly idioma: IdiomaProxy;
  public readonly fechaNacimiento: string;
  public readonly paisNacimiento: string;
  public readonly dni: string;
  public readonly tisnumerica: string;
  public readonly tipoTis: TipoTisProxy;
  public readonly nas: string;
  public readonly codsns: string;
  public readonly email: string;
  public readonly situacion: SituacionProxy;
  public readonly baja: boolean;
  public readonly datosAseguramiento: DatosAseguramientoProxy;
  public readonly listaTelefonos: ListaTelefonosProxy;
  public readonly domicilio: DomicilioProxy;
  public readonly cuposPaciente: CuposPacienteProxy;
  public readonly indEnvioSMS: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly indConfidencial: number;
  public readonly telefonoEnvioSMS: string;
  public static Parse(d: string): PacienteVOEntityProxy {
    return PacienteVOEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PacienteVOEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.cic, false, field + ".cic");
    checkString(d.nombre, false, field + ".nombre");
    checkString(d.apellido1, false, field + ".apellido1");
    checkString(d.apellido2, false, field + ".apellido2");
    d.sexo = SexoProxy.Create(d.sexo, field + ".sexo");
    d.idioma = IdiomaProxy.Create(d.idioma, field + ".idioma");
    checkString(d.fechaNacimiento, false, field + ".fechaNacimiento");
    checkString(d.paisNacimiento, false, field + ".paisNacimiento");
    checkString(d.dni, false, field + ".dni");
    checkString(d.tisnumerica, false, field + ".tisnumerica");
    d.tipoTis = TipoTisProxy.Create(d.tipoTis, field + ".tipoTis");
    checkString(d.nas, false, field + ".nas");
    checkString(d.codsns, false, field + ".codsns");
    checkString(d.email, false, field + ".email");
    d.situacion = SituacionProxy.Create(d.situacion, field + ".situacion");
    checkBoolean(d.baja, false, field + ".baja");
    d.datosAseguramiento = DatosAseguramientoProxy.Create(d.datosAseguramiento, field + ".datosAseguramiento");
    d.listaTelefonos = ListaTelefonosProxy.Create(d.listaTelefonos, field + ".listaTelefonos");
    d.domicilio = DomicilioProxy.Create(d.domicilio, field + ".domicilio");
    d.cuposPaciente = CuposPacienteProxy.Create(d.cuposPaciente, field + ".cuposPaciente");
    d.indEnvioSMS = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.indEnvioSMS, field + ".indEnvioSMS");
    checkNumber(d.indConfidencial, false, field + ".indConfidencial");
    checkString(d.telefonoEnvioSMS, false, field + ".telefonoEnvioSMS");
    return new PacienteVOEntityProxy(d);
  }
  private constructor(d: any) {
    this.cic = d.cic;
    this.nombre = d.nombre;
    this.apellido1 = d.apellido1;
    this.apellido2 = d.apellido2;
    this.sexo = d.sexo;
    this.idioma = d.idioma;
    this.fechaNacimiento = d.fechaNacimiento;
    this.paisNacimiento = d.paisNacimiento;
    this.dni = d.dni;
    this.tisnumerica = d.tisnumerica;
    this.tipoTis = d.tipoTis;
    this.nas = d.nas;
    this.codsns = d.codsns;
    this.email = d.email;
    this.situacion = d.situacion;
    this.baja = d.baja;
    this.datosAseguramiento = d.datosAseguramiento;
    this.listaTelefonos = d.listaTelefonos;
    this.domicilio = d.domicilio;
    this.cuposPaciente = d.cuposPaciente;
    this.indEnvioSMS = d.indEnvioSMS;
    this.indConfidencial = d.indConfidencial;
    this.telefonoEnvioSMS = d.telefonoEnvioSMS;
  }
}

export class SexoProxy {
  public readonly codSexo: string;
  public readonly descripcion: string;
  public static Parse(d: string): SexoProxy {
    return SexoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SexoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codSexo, false, field + ".codSexo");
    checkString(d.descripcion, false, field + ".descripcion");
    return new SexoProxy(d);
  }
  private constructor(d: any) {
    this.codSexo = d.codSexo;
    this.descripcion = d.descripcion;
  }
}

export class IdiomaProxy {
  public readonly codIdioma: string;
  public readonly codIso: string;
  public readonly descripcion: string;
  public static Parse(d: string): IdiomaProxy {
    return IdiomaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdiomaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codIdioma, false, field + ".codIdioma");
    checkString(d.codIso, false, field + ".codIso");
    checkString(d.descripcion, false, field + ".descripcion");
    return new IdiomaProxy(d);
  }
  private constructor(d: any) {
    this.codIdioma = d.codIdioma;
    this.codIso = d.codIso;
    this.descripcion = d.descripcion;
  }
}

export class TipoTisProxy {
  public readonly codTipoTis: string;
  public readonly descripcion: string;
  public static Parse(d: string): TipoTisProxy {
    return TipoTisProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoTisProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTipoTis, false, field + ".codTipoTis");
    checkString(d.descripcion, false, field + ".descripcion");
    return new TipoTisProxy(d);
  }
  private constructor(d: any) {
    this.codTipoTis = d.codTipoTis;
    this.descripcion = d.descripcion;
  }
}

export class SituacionProxy {
  public readonly codSituacion: string;
  public readonly descripcion: string;
  public static Parse(d: string): SituacionProxy {
    return SituacionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SituacionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codSituacion, false, field + ".codSituacion");
    checkString(d.descripcion, false, field + ".descripcion");
    return new SituacionProxy(d);
  }
  private constructor(d: any) {
    this.codSituacion = d.codSituacion;
    this.descripcion = d.descripcion;
  }
}

export class DatosAseguramientoProxy {
  public readonly tipoPoblacion: TipoPoblacionProxy;
  public readonly tipoTemporalidad: TipoTemporalidadProxy;
  public readonly titularidad: TitularidadProxy;
  public readonly tipoCiudadano: TipoCiudadanoProxy;
  public readonly titulo: TituloProxy;
  public readonly indicadorFarmacia: string;
  public readonly cobertura: CoberturaProxy;
  public static Parse(d: string): DatosAseguramientoProxy {
    return DatosAseguramientoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DatosAseguramientoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.tipoPoblacion = TipoPoblacionProxy.Create(d.tipoPoblacion, field + ".tipoPoblacion");
    d.tipoTemporalidad = TipoTemporalidadProxy.Create(d.tipoTemporalidad, field + ".tipoTemporalidad");
    d.titularidad = TitularidadProxy.Create(d.titularidad, field + ".titularidad");
    d.tipoCiudadano = TipoCiudadanoProxy.Create(d.tipoCiudadano, field + ".tipoCiudadano");
    d.titulo = TituloProxy.Create(d.titulo, field + ".titulo");
    checkString(d.indicadorFarmacia, false, field + ".indicadorFarmacia");
    d.cobertura = CoberturaProxy.Create(d.cobertura, field + ".cobertura");
    return new DatosAseguramientoProxy(d);
  }
  private constructor(d: any) {
    this.tipoPoblacion = d.tipoPoblacion;
    this.tipoTemporalidad = d.tipoTemporalidad;
    this.titularidad = d.titularidad;
    this.tipoCiudadano = d.tipoCiudadano;
    this.titulo = d.titulo;
    this.indicadorFarmacia = d.indicadorFarmacia;
    this.cobertura = d.cobertura;
  }
}

export class TipoPoblacionProxy {
  public readonly codTipoPoblacion: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): TipoPoblacionProxy {
    return TipoPoblacionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoPoblacionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoPoblacion, false, field + ".codTipoPoblacion");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new TipoPoblacionProxy(d);
  }
  private constructor(d: any) {
    this.codTipoPoblacion = d.codTipoPoblacion;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class TipoTemporalidadProxy {
  public readonly codTipoTemporalidad: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): TipoTemporalidadProxy {
    return TipoTemporalidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoTemporalidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoTemporalidad, false, field + ".codTipoTemporalidad");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new TipoTemporalidadProxy(d);
  }
  private constructor(d: any) {
    this.codTipoTemporalidad = d.codTipoTemporalidad;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class TitularidadProxy {
  public readonly codTitularidad: string;
  public readonly descripcion: string;
  public static Parse(d: string): TitularidadProxy {
    return TitularidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TitularidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTitularidad, false, field + ".codTitularidad");
    checkString(d.descripcion, false, field + ".descripcion");
    return new TitularidadProxy(d);
  }
  private constructor(d: any) {
    this.codTitularidad = d.codTitularidad;
    this.descripcion = d.descripcion;
  }
}

export class TipoCiudadanoProxy {
  public readonly codTipoCiudadano: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly pensionista: boolean;
  public readonly universalizado: boolean;
  public readonly farmaciaGratuita: boolean;
  public readonly facturable: boolean;
  public static Parse(d: string): TipoCiudadanoProxy {
    return TipoCiudadanoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoCiudadanoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoCiudadano, false, field + ".codTipoCiudadano");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.pensionista, false, field + ".pensionista");
    checkBoolean(d.universalizado, false, field + ".universalizado");
    checkBoolean(d.farmaciaGratuita, false, field + ".farmaciaGratuita");
    checkBoolean(d.facturable, false, field + ".facturable");
    return new TipoCiudadanoProxy(d);
  }
  private constructor(d: any) {
    this.codTipoCiudadano = d.codTipoCiudadano;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.pensionista = d.pensionista;
    this.universalizado = d.universalizado;
    this.farmaciaGratuita = d.farmaciaGratuita;
    this.facturable = d.facturable;
  }
}

export class TituloProxy {
  public readonly codTitulo: string;
  public readonly codTipoTitulo: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): TituloProxy {
    return TituloProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TituloProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTitulo, false, field + ".codTitulo");
    checkNumber(d.codTipoTitulo, false, field + ".codTipoTitulo");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new TituloProxy(d);
  }
  private constructor(d: any) {
    this.codTitulo = d.codTitulo;
    this.codTipoTitulo = d.codTipoTitulo;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class CoberturaProxy {
  public readonly codCobertura: string;
  public static Parse(d: string): CoberturaProxy {
    return CoberturaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CoberturaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codCobertura, false, field + ".codCobertura");
    return new CoberturaProxy(d);
  }
  private constructor(d: any) {
    this.codCobertura = d.codCobertura;
  }
}

export class ListaTelefonosProxy {
  public readonly telefonos: TelefonosEntityProxy[] | null;
  public static Parse(d: string): ListaTelefonosProxy {
    return ListaTelefonosProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaTelefonosProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.telefonos, field + ".telefonos");
    if (d.telefonos) {
      for (let i = 0; i < d.telefonos.length; i++) {
        d.telefonos[i] = TelefonosEntityProxy.Create(d.telefonos[i], field + ".telefonos" + "[" + i + "]");
      }
    }
    if (d.telefonos === undefined) {
      d.telefonos = null;
    }
    return new ListaTelefonosProxy(d);
  }
  private constructor(d: any) {
    this.telefonos = d.telefonos;
  }
}

export class TelefonosEntityProxy {
  public readonly bdIndiceTelefono: number;
  public readonly strNumTelefono: string;
  public readonly strObservaciones: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TelefonosEntityProxy {
    return TelefonosEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TelefonosEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bdIndiceTelefono, false, field + ".bdIndiceTelefono");
    checkString(d.strNumTelefono, false, field + ".strNumTelefono");
    d.strObservaciones = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.strObservaciones, field + ".strObservaciones");
    return new TelefonosEntityProxy(d);
  }
  private constructor(d: any) {
    this.bdIndiceTelefono = d.bdIndiceTelefono;
    this.strNumTelefono = d.strNumTelefono;
    this.strObservaciones = d.strObservaciones;
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy(d);
  }
  private constructor(d: any) {
  }
}

export class DomicilioProxy {
  public readonly portal: PortalProxy;
  public readonly piso: string;
  public readonly mano: string;
  public readonly pais: PaisProxy;
  public readonly otrosDatos: string;
  public readonly bloque: string;
  public readonly numPortal: string;
  public readonly codPostal: string;
  public static Parse(d: string): DomicilioProxy {
    return DomicilioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DomicilioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.portal = PortalProxy.Create(d.portal, field + ".portal");
    checkString(d.piso, false, field + ".piso");
    checkString(d.mano, false, field + ".mano");
    d.pais = PaisProxy.Create(d.pais, field + ".pais");
    checkString(d.otrosDatos, false, field + ".otrosDatos");
    checkString(d.bloque, false, field + ".bloque");
    checkString(d.numPortal, false, field + ".numPortal");
    checkString(d.codPostal, false, field + ".codPostal");
    return new DomicilioProxy(d);
  }
  private constructor(d: any) {
    this.portal = d.portal;
    this.piso = d.piso;
    this.mano = d.mano;
    this.pais = d.pais;
    this.otrosDatos = d.otrosDatos;
    this.bloque = d.bloque;
    this.numPortal = d.numPortal;
    this.codPostal = d.codPostal;
  }
}

export class PortalProxy {
  public readonly idPortal: number;
  public readonly numero: number;
  public readonly bis: string;
  public readonly tipoPortal: string;
  public readonly idEdificio: number;
  public readonly idBloque: string;
  public readonly eje: number;
  public readonly tramo: TramoProxy;
  public readonly calle: CalleProxy;
  public readonly coordenadas: CoordenadasProxy;
  public static Parse(d: string): PortalProxy {
    return PortalProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PortalProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idPortal, false, field + ".idPortal");
    checkNumber(d.numero, false, field + ".numero");
    checkString(d.bis, false, field + ".bis");
    checkString(d.tipoPortal, false, field + ".tipoPortal");
    checkNumber(d.idEdificio, false, field + ".idEdificio");
    checkString(d.idBloque, false, field + ".idBloque");
    checkNumber(d.eje, false, field + ".eje");
    d.tramo = TramoProxy.Create(d.tramo, field + ".tramo");
    d.calle = CalleProxy.Create(d.calle, field + ".calle");
    d.coordenadas = CoordenadasProxy.Create(d.coordenadas, field + ".coordenadas");
    return new PortalProxy(d);
  }
  private constructor(d: any) {
    this.idPortal = d.idPortal;
    this.numero = d.numero;
    this.bis = d.bis;
    this.tipoPortal = d.tipoPortal;
    this.idEdificio = d.idEdificio;
    this.idBloque = d.idBloque;
    this.eje = d.eje;
    this.tramo = d.tramo;
    this.calle = d.calle;
    this.coordenadas = d.coordenadas;
  }
}

export class TramoProxy {
  public readonly idTramo: number;
  public readonly codigoTramo: string;
  public readonly codPostal: string;
  public readonly numDesde: number;
  public readonly numHasta: number;
  public readonly tipoNumeracion: string;
  public readonly barrio: BarrioProxy;
  public readonly seccion: SeccionProxy;
  public readonly localidad: LocalidadProxy;
  public static Parse(d: string): TramoProxy {
    return TramoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TramoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idTramo, false, field + ".idTramo");
    checkString(d.codigoTramo, false, field + ".codigoTramo");
    checkString(d.codPostal, false, field + ".codPostal");
    checkNumber(d.numDesde, false, field + ".numDesde");
    checkNumber(d.numHasta, false, field + ".numHasta");
    checkString(d.tipoNumeracion, false, field + ".tipoNumeracion");
    d.barrio = BarrioProxy.Create(d.barrio, field + ".barrio");
    d.seccion = SeccionProxy.Create(d.seccion, field + ".seccion");
    d.localidad = LocalidadProxy.Create(d.localidad, field + ".localidad");
    return new TramoProxy(d);
  }
  private constructor(d: any) {
    this.idTramo = d.idTramo;
    this.codigoTramo = d.codigoTramo;
    this.codPostal = d.codPostal;
    this.numDesde = d.numDesde;
    this.numHasta = d.numHasta;
    this.tipoNumeracion = d.tipoNumeracion;
    this.barrio = d.barrio;
    this.seccion = d.seccion;
    this.localidad = d.localidad;
  }
}

export class BarrioProxy {
  public readonly idBarrio: number;
  public readonly codigoBarrio: string;
  public readonly descripcionOficial: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): BarrioProxy {
    return BarrioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BarrioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idBarrio, false, field + ".idBarrio");
    checkString(d.codigoBarrio, false, field + ".codigoBarrio");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new BarrioProxy(d);
  }
  private constructor(d: any) {
    this.idBarrio = d.idBarrio;
    this.codigoBarrio = d.codigoBarrio;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionEus = d.descripcionEus;
  }
}

export class SeccionProxy {
  public readonly idSeccion: number;
  public readonly codigoSeccion: string;
  public readonly distrito: DistritoProxy;
  public static Parse(d: string): SeccionProxy {
    return SeccionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SeccionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idSeccion, false, field + ".idSeccion");
    checkString(d.codigoSeccion, false, field + ".codigoSeccion");
    d.distrito = DistritoProxy.Create(d.distrito, field + ".distrito");
    return new SeccionProxy(d);
  }
  private constructor(d: any) {
    this.idSeccion = d.idSeccion;
    this.codigoSeccion = d.codigoSeccion;
    this.distrito = d.distrito;
  }
}

export class DistritoProxy {
  public readonly idDistrito: number;
  public readonly codigoDistrito: string;
  public static Parse(d: string): DistritoProxy {
    return DistritoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DistritoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idDistrito, false, field + ".idDistrito");
    checkString(d.codigoDistrito, false, field + ".codigoDistrito");
    return new DistritoProxy(d);
  }
  private constructor(d: any) {
    this.idDistrito = d.idDistrito;
    this.codigoDistrito = d.codigoDistrito;
  }
}

export class LocalidadProxy {
  public readonly idLocalidad: number;
  public readonly codigoLocalidad: string;
  public readonly descripcionOficial: string;
  public readonly municipio: MunicipioProxy;
  public static Parse(d: string): LocalidadProxy {
    return LocalidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LocalidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idLocalidad, false, field + ".idLocalidad");
    checkString(d.codigoLocalidad, false, field + ".codigoLocalidad");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    d.municipio = MunicipioProxy.Create(d.municipio, field + ".municipio");
    return new LocalidadProxy(d);
  }
  private constructor(d: any) {
    this.idLocalidad = d.idLocalidad;
    this.codigoLocalidad = d.codigoLocalidad;
    this.descripcionOficial = d.descripcionOficial;
    this.municipio = d.municipio;
  }
}

export class MunicipioProxy {
  public readonly codMunicipio: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly comarca: ComarcaProxy;
  public readonly provincia: ProvinciaProxy;
  public static Parse(d: string): MunicipioProxy {
    return MunicipioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MunicipioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codMunicipio, false, field + ".codMunicipio");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    d.comarca = ComarcaProxy.Create(d.comarca, field + ".comarca");
    d.provincia = ProvinciaProxy.Create(d.provincia, field + ".provincia");
    return new MunicipioProxy(d);
  }
  private constructor(d: any) {
    this.codMunicipio = d.codMunicipio;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.comarca = d.comarca;
    this.provincia = d.provincia;
  }
}

export class ComarcaProxy {
  public readonly codigoComarca: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): ComarcaProxy {
    return ComarcaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ComarcaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codigoComarca, false, field + ".codigoComarca");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new ComarcaProxy(d);
  }
  private constructor(d: any) {
    this.codigoComarca = d.codigoComarca;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class ProvinciaProxy {
  public readonly codProvincia: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly baja: boolean;
  public readonly autonomia: AutonomiaProxy;
  public static Parse(d: string): ProvinciaProxy {
    return ProvinciaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProvinciaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codProvincia, false, field + ".codProvincia");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.baja, false, field + ".baja");
    d.autonomia = AutonomiaProxy.Create(d.autonomia, field + ".autonomia");
    return new ProvinciaProxy(d);
  }
  private constructor(d: any) {
    this.codProvincia = d.codProvincia;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.baja = d.baja;
    this.autonomia = d.autonomia;
  }
}

export class AutonomiaProxy {
  public readonly codAutonomia: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly baja: boolean;
  public static Parse(d: string): AutonomiaProxy {
    return AutonomiaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AutonomiaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codAutonomia, false, field + ".codAutonomia");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.baja, false, field + ".baja");
    return new AutonomiaProxy(d);
  }
  private constructor(d: any) {
    this.codAutonomia = d.codAutonomia;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.baja = d.baja;
  }
}

export class CalleProxy {
  public readonly idCalle: number;
  public readonly codigoCalle: number;
  public readonly descripcionOficial: string;
  public readonly tipoVia: TipoViaProxy;
  public static Parse(d: string): CalleProxy {
    return CalleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CalleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idCalle, false, field + ".idCalle");
    checkNumber(d.codigoCalle, false, field + ".codigoCalle");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    d.tipoVia = TipoViaProxy.Create(d.tipoVia, field + ".tipoVia");
    return new CalleProxy(d);
  }
  private constructor(d: any) {
    this.idCalle = d.idCalle;
    this.codigoCalle = d.codigoCalle;
    this.descripcionOficial = d.descripcionOficial;
    this.tipoVia = d.tipoVia;
  }
}

export class TipoViaProxy {
  public readonly idTipoVia: string;
  public readonly descripcion: string;
  public readonly descripcionReducidaEus: string;
  public readonly descripcionAbrevEus: string;
  public readonly descripcionReducidaCas: string;
  public readonly descripcionAbrevCas: string;
  public static Parse(d: string): TipoViaProxy {
    return TipoViaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoViaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.idTipoVia, false, field + ".idTipoVia");
    checkString(d.descripcion, false, field + ".descripcion");
    checkString(d.descripcionReducidaEus, false, field + ".descripcionReducidaEus");
    checkString(d.descripcionAbrevEus, false, field + ".descripcionAbrevEus");
    checkString(d.descripcionReducidaCas, false, field + ".descripcionReducidaCas");
    checkString(d.descripcionAbrevCas, false, field + ".descripcionAbrevCas");
    return new TipoViaProxy(d);
  }
  private constructor(d: any) {
    this.idTipoVia = d.idTipoVia;
    this.descripcion = d.descripcion;
    this.descripcionReducidaEus = d.descripcionReducidaEus;
    this.descripcionAbrevEus = d.descripcionAbrevEus;
    this.descripcionReducidaCas = d.descripcionReducidaCas;
    this.descripcionAbrevCas = d.descripcionAbrevCas;
  }
}

export class CoordenadasProxy {
  public readonly xEd50: number;
  public readonly xEtrs89: number;
  public readonly yEd50: number;
  public readonly yEtrs89: number;
  public static Parse(d: string): CoordenadasProxy {
    return CoordenadasProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CoordenadasProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.xEd50, false, field + ".xEd50");
    checkNumber(d.xEtrs89, false, field + ".xEtrs89");
    checkNumber(d.yEd50, false, field + ".yEd50");
    checkNumber(d.yEtrs89, false, field + ".yEtrs89");
    return new CoordenadasProxy(d);
  }
  private constructor(d: any) {
    this.xEd50 = d.xEd50;
    this.xEtrs89 = d.xEtrs89;
    this.yEd50 = d.yEd50;
    this.yEtrs89 = d.yEtrs89;
  }
}

export class PaisProxy {
  public readonly idPais: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): PaisProxy {
    return PaisProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PaisProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.idPais, false, field + ".idPais");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new PaisProxy(d);
  }
  private constructor(d: any) {
    this.idPais = d.idPais;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class CuposPacienteProxy {
  public readonly centro: CentroProxy;
  public readonly uap: UapProxy;
  public readonly cupoMedico: CupoMedicoProxy;
  public static Parse(d: string): CuposPacienteProxy {
    return CuposPacienteProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CuposPacienteProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.centro = CentroProxy.Create(d.centro, field + ".centro");
    d.uap = UapProxy.Create(d.uap, field + ".uap");
    d.cupoMedico = CupoMedicoProxy.Create(d.cupoMedico, field + ".cupoMedico");
    return new CuposPacienteProxy(d);
  }
  private constructor(d: any) {
    this.centro = d.centro;
    this.uap = d.uap;
    this.cupoMedico = d.cupoMedico;
  }
}

export class CentroProxy {
  public readonly codCentro: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): CentroProxy {
    return CentroProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CentroProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codCentro, false, field + ".codCentro");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new CentroProxy(d);
  }
  private constructor(d: any) {
    this.codCentro = d.codCentro;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class UapProxy {
  public readonly codUap: string;
  public readonly descripcionCas: string;
  public readonly codOsi: string;
  public readonly descAbrev: string;
  public static Parse(d: string): UapProxy {
    return UapProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UapProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codUap, false, field + ".codUap");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.codOsi, false, field + ".codOsi");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new UapProxy(d);
  }
  private constructor(d: any) {
    this.codUap = d.codUap;
    this.descripcionCas = d.descripcionCas;
    this.codOsi = d.codOsi;
    this.descAbrev = d.descAbrev;
  }
}

export class CupoMedicoProxy {
  public readonly codCupo: string;
  public readonly tipoCupo: number;
  public readonly profesional: ProfesionalProxy;
  public readonly especialidad: EspecialidadProxy;
  public static Parse(d: string): CupoMedicoProxy {
    return CupoMedicoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CupoMedicoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codCupo, false, field + ".codCupo");
    checkNumber(d.tipoCupo, false, field + ".tipoCupo");
    d.profesional = ProfesionalProxy.Create(d.profesional, field + ".profesional");
    d.especialidad = EspecialidadProxy.Create(d.especialidad, field + ".especialidad");
    return new CupoMedicoProxy(d);
  }
  private constructor(d: any) {
    this.codCupo = d.codCupo;
    this.tipoCupo = d.tipoCupo;
    this.profesional = d.profesional;
    this.especialidad = d.especialidad;
  }
}

export class ProfesionalProxy {
  public readonly codProf: number;
  public readonly codGizabide: number;
  public readonly dni: string;
  public readonly nombre: string;
  public readonly apellido1: string;
  public readonly apellido2: string;
  public static Parse(d: string): ProfesionalProxy {
    return ProfesionalProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProfesionalProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codProf, false, field + ".codProf");
    checkNumber(d.codGizabide, false, field + ".codGizabide");
    checkString(d.dni, false, field + ".dni");
    checkString(d.nombre, false, field + ".nombre");
    checkString(d.apellido1, false, field + ".apellido1");
    checkString(d.apellido2, false, field + ".apellido2");
    return new ProfesionalProxy(d);
  }
  private constructor(d: any) {
    this.codProf = d.codProf;
    this.codGizabide = d.codGizabide;
    this.dni = d.dni;
    this.nombre = d.nombre;
    this.apellido1 = d.apellido1;
    this.apellido2 = d.apellido2;
  }
}

export class EspecialidadProxy {
  public readonly codSeccion: number;
  public readonly descripcionCast: string;
  public readonly descripcionEus: string;
  public readonly codServicio: number;
  public readonly descripcionServCast: string;
  public readonly descripcionServEus: string;
  public static Parse(d: string): EspecialidadProxy {
    return EspecialidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EspecialidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codSeccion, false, field + ".codSeccion");
    checkString(d.descripcionCast, false, field + ".descripcionCast");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkNumber(d.codServicio, false, field + ".codServicio");
    checkString(d.descripcionServCast, false, field + ".descripcionServCast");
    checkString(d.descripcionServEus, false, field + ".descripcionServEus");
    return new EspecialidadProxy(d);
  }
  private constructor(d: any) {
    this.codSeccion = d.codSeccion;
    this.descripcionCast = d.descripcionCast;
    this.descripcionEus = d.descripcionEus;
    this.codServicio = d.codServicio;
    this.descripcionServCast = d.descripcionServCast;
    this.descripcionServEus = d.descripcionServEus;
  }
}

export class PrescriptionsProxy {
  public readonly xml: XmlProxy;
  public readonly S:Envelope: S:EnvelopeProxy;
  public static Parse(d: string): PrescriptionsProxy {
    return PrescriptionsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PrescriptionsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.xml = XmlProxy.Create(d.xml, field + ".xml");
    d.S:Envelope = S:EnvelopeProxy.Create(d.S:Envelope, field + ".S:Envelope");
    return new PrescriptionsProxy(d);
  }
  private constructor(d: any) {
    this.xml = d.xml;
    this.S:Envelope = d.S:Envelope;
  }
}

export class XmlProxy {
  public readonly @version: number;
  public readonly @encoding: string;
  public static Parse(d: string): XmlProxy {
    return XmlProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): XmlProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@version, false, field + ".@version");
    checkString(d.@encoding, false, field + ".@encoding");
    return new XmlProxy(d);
  }
  private constructor(d: any) {
    this.@version = d.@version;
    this.@encoding = d.@encoding;
  }
}

export class S:EnvelopeProxy {
  public readonly @xmlns:S: string;
  public readonly S:Body: S:BodyProxy;
  public static Parse(d: string): S:EnvelopeProxy {
    return S:EnvelopeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): S:EnvelopeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:S, false, field + ".@xmlns:S");
    d.S:Body = S:BodyProxy.Create(d.S:Body, field + ".S:Body");
    return new S:EnvelopeProxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:S = d.@xmlns:S;
    this.S:Body = d.S:Body;
  }
}

export class S:BodyProxy {
  public readonly ns2:prescripcion_v6: Ns2:prescripcionV6Proxy;
  public static Parse(d: string): S:BodyProxy {
    return S:BodyProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): S:BodyProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.ns2:prescripcion_v6 = Ns2:prescripcionV6Proxy.Create(d.ns2:prescripcion_v6, field + ".ns2:prescripcion_v6");
    return new S:BodyProxy(d);
  }
  private constructor(d: any) {
    this.ns2:prescripcion_v6 = d.ns2:prescripcion_v6;
  }
}

export class Ns2:prescripcionV6Proxy {
  public readonly @xmlns:ns2: string;
  public readonly ns2:prescripciones_v6: Ns2:prescripcionesV6EntityProxy[] | null;
  public static Parse(d: string): Ns2:prescripcionV6Proxy {
    return Ns2:prescripcionV6Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Ns2:prescripcionV6Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:ns2, false, field + ".@xmlns:ns2");
    checkArray(d.ns2:prescripciones_v6, field + ".ns2:prescripciones_v6");
    if (d.ns2:prescripciones_v6) {
      for (let i = 0; i < d.ns2:prescripciones_v6.length; i++) {
        d.ns2:prescripciones_v6[i] = Ns2:prescripcionesV6EntityProxy.Create(d.ns2:prescripciones_v6[i], field + ".ns2:prescripciones_v6" + "[" + i + "]");
      }
    }
    if (d.ns2:prescripciones_v6 === undefined) {
      d.ns2:prescripciones_v6 = null;
    }
    return new Ns2:prescripcionV6Proxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:ns2 = d.@xmlns:ns2;
    this.ns2:prescripciones_v6 = d.ns2:prescripciones_v6;
  }
}

export class Ns2:prescripcionesV6EntityProxy {
  public readonly ns2:idPrescripcion: number;
  public readonly ns2:estado: string;
  public readonly ns2:tipo: string;
  public readonly ns2:nombreProducto: string;
  public readonly ns2:listaPrincipiosActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:listaPrincipiosActivosIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:codVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:nombreVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:nombreViaIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitual: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:fechaInicio: string;
  public readonly ns2:fechaRevision: string | null;
  public readonly ns2:fechaProxRecogida: string;
  public readonly ns2:tipoAtencion: string;
  public readonly ns2:seguimientoAE: string;
  public readonly ns2:prescriptorIdUnico: string;
  public readonly ns2:prescriptorApellido1: string;
  public readonly ns2:prescriptorApellido2: string;
  public readonly ns2:prescriptorNombre: string;
  public readonly ns2:creditoAdicional: boolean;
  public readonly ns2:estupefaciente: boolean;
  public readonly ns2:tipoElementoPrescrito: string;
  public readonly ns2:codigoPrescrito: number;
  public readonly ns2:pautaHabitualPacES: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitualPacEU: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitualPacIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:codATC: string;
  public readonly ns2:desATC: string;
  public readonly ns2:codForma: string;
  public readonly ns2:descripcionForma: string;
  public readonly ns2:descripcionFormaIng: string;
  public readonly ns2:listaCodPActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:dosisValor: number | null;
  public readonly ns2:dosisUnidad: string | null;
  public readonly ns2:estadoVisado: string | null;
  public readonly ns2:fechaFinalizacion: string | null;
  public static Parse(d: string): Ns2:prescripcionesV6EntityProxy {
    return Ns2:prescripcionesV6EntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Ns2:prescripcionesV6EntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.ns2:idPrescripcion, false, field + ".ns2:idPrescripcion");
    checkString(d.ns2:estado, false, field + ".ns2:estado");
    checkString(d.ns2:tipo, false, field + ".ns2:tipo");
    checkString(d.ns2:nombreProducto, false, field + ".ns2:nombreProducto");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaPrincipiosActivos, false, field + ".ns2:listaPrincipiosActivos");
    } catch (e) {
      try {
        d.ns2:listaPrincipiosActivos = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaPrincipiosActivos, field + ".ns2:listaPrincipiosActivos");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaPrincipiosActivosIng, false, field + ".ns2:listaPrincipiosActivosIng");
    } catch (e) {
      try {
        d.ns2:listaPrincipiosActivosIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaPrincipiosActivosIng, field + ".ns2:listaPrincipiosActivosIng");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:codVia, false, field + ".ns2:codVia");
    } catch (e) {
      try {
        d.ns2:codVia = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:codVia, field + ".ns2:codVia");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:nombreVia, false, field + ".ns2:nombreVia");
    } catch (e) {
      try {
        d.ns2:nombreVia = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:nombreVia, field + ".ns2:nombreVia");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:nombreViaIng, false, field + ".ns2:nombreViaIng");
    } catch (e) {
      try {
        d.ns2:nombreViaIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:nombreViaIng, field + ".ns2:nombreViaIng");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitual, false, field + ".ns2:pautaHabitual");
    } catch (e) {
      try {
        d.ns2:pautaHabitual = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitual, field + ".ns2:pautaHabitual");
      } catch (e) {
        throw e;
      }
    }
    checkString(d.ns2:fechaInicio, false, field + ".ns2:fechaInicio");
    checkString(d.ns2:fechaRevision, true, field + ".ns2:fechaRevision");
    if (d.ns2:fechaRevision === undefined) {
      d.ns2:fechaRevision = null;
    }
    checkString(d.ns2:fechaProxRecogida, false, field + ".ns2:fechaProxRecogida");
    checkString(d.ns2:tipoAtencion, false, field + ".ns2:tipoAtencion");
    checkString(d.ns2:seguimientoAE, false, field + ".ns2:seguimientoAE");
    checkString(d.ns2:prescriptorIdUnico, false, field + ".ns2:prescriptorIdUnico");
    checkString(d.ns2:prescriptorApellido1, false, field + ".ns2:prescriptorApellido1");
    checkString(d.ns2:prescriptorApellido2, false, field + ".ns2:prescriptorApellido2");
    checkString(d.ns2:prescriptorNombre, false, field + ".ns2:prescriptorNombre");
    checkBoolean(d.ns2:creditoAdicional, false, field + ".ns2:creditoAdicional");
    checkBoolean(d.ns2:estupefaciente, false, field + ".ns2:estupefaciente");
    checkString(d.ns2:tipoElementoPrescrito, false, field + ".ns2:tipoElementoPrescrito");
    checkNumber(d.ns2:codigoPrescrito, false, field + ".ns2:codigoPrescrito");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacES, false, field + ".ns2:pautaHabitualPacES");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacES = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacES, field + ".ns2:pautaHabitualPacES");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacEU, false, field + ".ns2:pautaHabitualPacEU");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacEU = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacEU, field + ".ns2:pautaHabitualPacEU");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacIng, false, field + ".ns2:pautaHabitualPacIng");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacIng, field + ".ns2:pautaHabitualPacIng");
      } catch (e) {
        throw e;
      }
    }
    checkString(d.ns2:codATC, false, field + ".ns2:codATC");
    checkString(d.ns2:desATC, false, field + ".ns2:desATC");
    checkString(d.ns2:codForma, false, field + ".ns2:codForma");
    checkString(d.ns2:descripcionForma, false, field + ".ns2:descripcionForma");
    checkString(d.ns2:descripcionFormaIng, false, field + ".ns2:descripcionFormaIng");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaCodPActivos, false, field + ".ns2:listaCodPActivos");
    } catch (e) {
      try {
        d.ns2:listaCodPActivos = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaCodPActivos, field + ".ns2:listaCodPActivos");
      } catch (e) {
        throw e;
      }
    }
    checkNumber(d.ns2:dosisValor, true, field + ".ns2:dosisValor");
    if (d.ns2:dosisValor === undefined) {
      d.ns2:dosisValor = null;
    }
    checkString(d.ns2:dosisUnidad, true, field + ".ns2:dosisUnidad");
    if (d.ns2:dosisUnidad === undefined) {
      d.ns2:dosisUnidad = null;
    }
    checkString(d.ns2:estadoVisado, true, field + ".ns2:estadoVisado");
    if (d.ns2:estadoVisado === undefined) {
      d.ns2:estadoVisado = null;
    }
    checkString(d.ns2:fechaFinalizacion, true, field + ".ns2:fechaFinalizacion");
    if (d.ns2:fechaFinalizacion === undefined) {
      d.ns2:fechaFinalizacion = null;
    }
    return new Ns2:prescripcionesV6EntityProxy(d);
  }
  private constructor(d: any) {
    this.ns2:idPrescripcion = d.ns2:idPrescripcion;
    this.ns2:estado = d.ns2:estado;
    this.ns2:tipo = d.ns2:tipo;
    this.ns2:nombreProducto = d.ns2:nombreProducto;
    this.ns2:listaPrincipiosActivos = d.ns2:listaPrincipiosActivos;
    this.ns2:listaPrincipiosActivosIng = d.ns2:listaPrincipiosActivosIng;
    this.ns2:codVia = d.ns2:codVia;
    this.ns2:nombreVia = d.ns2:nombreVia;
    this.ns2:nombreViaIng = d.ns2:nombreViaIng;
    this.ns2:pautaHabitual = d.ns2:pautaHabitual;
    this.ns2:fechaInicio = d.ns2:fechaInicio;
    this.ns2:fechaRevision = d.ns2:fechaRevision;
    this.ns2:fechaProxRecogida = d.ns2:fechaProxRecogida;
    this.ns2:tipoAtencion = d.ns2:tipoAtencion;
    this.ns2:seguimientoAE = d.ns2:seguimientoAE;
    this.ns2:prescriptorIdUnico = d.ns2:prescriptorIdUnico;
    this.ns2:prescriptorApellido1 = d.ns2:prescriptorApellido1;
    this.ns2:prescriptorApellido2 = d.ns2:prescriptorApellido2;
    this.ns2:prescriptorNombre = d.ns2:prescriptorNombre;
    this.ns2:creditoAdicional = d.ns2:creditoAdicional;
    this.ns2:estupefaciente = d.ns2:estupefaciente;
    this.ns2:tipoElementoPrescrito = d.ns2:tipoElementoPrescrito;
    this.ns2:codigoPrescrito = d.ns2:codigoPrescrito;
    this.ns2:pautaHabitualPacES = d.ns2:pautaHabitualPacES;
    this.ns2:pautaHabitualPacEU = d.ns2:pautaHabitualPacEU;
    this.ns2:pautaHabitualPacIng = d.ns2:pautaHabitualPacIng;
    this.ns2:codATC = d.ns2:codATC;
    this.ns2:desATC = d.ns2:desATC;
    this.ns2:codForma = d.ns2:codForma;
    this.ns2:descripcionForma = d.ns2:descripcionForma;
    this.ns2:descripcionFormaIng = d.ns2:descripcionFormaIng;
    this.ns2:listaCodPActivos = d.ns2:listaCodPActivos;
    this.ns2:dosisValor = d.ns2:dosisValor;
    this.ns2:dosisUnidad = d.ns2:dosisUnidad;
    this.ns2:estadoVisado = d.ns2:estadoVisado;
    this.ns2:fechaFinalizacion = d.ns2:fechaFinalizacion;
  }
}

export class LabResultsEntityProxy {
  public readonly FechaResultado: string;
  public readonly IdPrueba: string;
  public readonly Resultado: string;
  public readonly descPrueba: string;
  public static Parse(d: string): LabResultsEntityProxy {
    return LabResultsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LabResultsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.FechaResultado, false, field + ".FechaResultado");
    checkString(d.IdPrueba, false, field + ".IdPrueba");
    checkString(d.Resultado, false, field + ".Resultado");
    checkString(d.descPrueba, false, field + ".descPrueba");
    return new LabResultsEntityProxy(d);
  }
  private constructor(d: any) {
    this.FechaResultado = d.FechaResultado;
    this.IdPrueba = d.IdPrueba;
    this.Resultado = d.Resultado;
    this.descPrueba = d.descPrueba;
  }
}

export class ConditionsProxy {
  public readonly @xmlns:a: string;
  public readonly @xmlns:i: string;
  public readonly a:CIC: number;
  public readonly a:HCR_CDA: A:HCRCDAProxy;
  public readonly a:HCR_PDF: string;
  public static Parse(d: string): ConditionsProxy {
    return ConditionsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConditionsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:a, false, field + ".@xmlns:a");
    checkString(d.@xmlns:i, false, field + ".@xmlns:i");
    checkNumber(d.a:CIC, false, field + ".a:CIC");
    d.a:HCR_CDA = A:HCRCDAProxy.Create(d.a:HCR_CDA, field + ".a:HCR_CDA");
    checkString(d.a:HCR_PDF, false, field + ".a:HCR_PDF");
    return new ConditionsProxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:a = d.@xmlns:a;
    this.@xmlns:i = d.@xmlns:i;
    this.a:CIC = d.a:CIC;
    this.a:HCR_CDA = d.a:HCR_CDA;
    this.a:HCR_PDF = d.a:HCR_PDF;
  }
}

export class A:HCRCDAProxy {
  public readonly ClinicalDocument: ClinicalDocumentProxy;
  public static Parse(d: string): A:HCRCDAProxy {
    return A:HCRCDAProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): A:HCRCDAProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.ClinicalDocument = ClinicalDocumentProxy.Create(d.ClinicalDocument, field + ".ClinicalDocument");
    return new A:HCRCDAProxy(d);
  }
  private constructor(d: any) {
    this.ClinicalDocument = d.ClinicalDocument;
  }
}

export class ClinicalDocumentProxy {
  public readonly @xmlns:xsi: string;
  public readonly _at_xsi:schemaLocation: string;
  public readonly @xmlns:voc: string;
  public readonly @xmlns: string;
  public readonly typeId: TypeIdProxy;
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly id: IdOrSetIdProxy;
  public readonly code: CodeOrRouteCodeProxy;
  public readonly title: string;
  public readonly effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly confidentialityCode: AdministrativeGenderCodeOrConfidentialityCodeProxy;
  public readonly languageCode: SignatureCodeOrLanguageCodeProxy;
  public readonly setId: IdOrSetIdProxy;
  public readonly versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly recordTarget: RecordTargetProxy;
  public readonly author: AuthorProxy;
  public readonly informant: IdOrTextOrCodeOrInformantProxy;
  public readonly custodian: CustodianProxy;
  public readonly legalAuthenticator: LegalAuthenticatorProxy;
  public readonly documentationOf: DocumentationOfProxy;
  public readonly relatedDocument: RelatedDocumentProxy;
  public readonly component: ComponentProxy;
  public static Parse(d: string): ClinicalDocumentProxy {
    return ClinicalDocumentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ClinicalDocumentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:xsi, false, field + ".@xmlns:xsi");
    checkString(d._at_xsi:schemaLocation, false, field + "._at_xsi:schemaLocation");
    checkString(d.@xmlns:voc, false, field + ".@xmlns:voc");
    checkString(d.@xmlns, false, field + ".@xmlns");
    d.typeId = TypeIdProxy.Create(d.typeId, field + ".typeId");
    d.templateId = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId, field + ".templateId");
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    checkString(d.title, false, field + ".title");
    d.effectiveTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.effectiveTime, field + ".effectiveTime");
    d.confidentialityCode = AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(d.confidentialityCode, field + ".confidentialityCode");
    d.languageCode = SignatureCodeOrLanguageCodeProxy.Create(d.languageCode, field + ".languageCode");
    d.setId = IdOrSetIdProxy.Create(d.setId, field + ".setId");
    d.versionNumber = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.versionNumber, field + ".versionNumber");
    d.recordTarget = RecordTargetProxy.Create(d.recordTarget, field + ".recordTarget");
    d.author = AuthorProxy.Create(d.author, field + ".author");
    d.informant = IdOrTextOrCodeOrInformantProxy.Create(d.informant, field + ".informant");
    d.custodian = CustodianProxy.Create(d.custodian, field + ".custodian");
    d.legalAuthenticator = LegalAuthenticatorProxy.Create(d.legalAuthenticator, field + ".legalAuthenticator");
    d.documentationOf = DocumentationOfProxy.Create(d.documentationOf, field + ".documentationOf");
    d.relatedDocument = RelatedDocumentProxy.Create(d.relatedDocument, field + ".relatedDocument");
    d.component = ComponentProxy.Create(d.component, field + ".component");
    return new ClinicalDocumentProxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:xsi = d.@xmlns:xsi;
    this._at_xsi:schemaLocation = d._at_xsi:schemaLocation;
    this.@xmlns:voc = d.@xmlns:voc;
    this.@xmlns = d.@xmlns;
    this.typeId = d.typeId;
    this.templateId = d.templateId;
    this.id = d.id;
    this.code = d.code;
    this.title = d.title;
    this.effectiveTime = d.effectiveTime;
    this.confidentialityCode = d.confidentialityCode;
    this.languageCode = d.languageCode;
    this.setId = d.setId;
    this.versionNumber = d.versionNumber;
    this.recordTarget = d.recordTarget;
    this.author = d.author;
    this.informant = d.informant;
    this.custodian = d.custodian;
    this.legalAuthenticator = d.legalAuthenticator;
    this.documentationOf = d.documentationOf;
    this.relatedDocument = d.relatedDocument;
    this.component = d.component;
  }
}

export class TypeIdProxy {
  public readonly @root: string;
  public readonly @extension: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TypeIdProxy {
    return TypeIdProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TypeIdProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    checkString(d.@extension, false, field + ".@extension");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new TypeIdProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
  }
}

export class IdOrTemplateIdOrTemplateIdEntityProxy {
  public readonly @root: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrTemplateIdOrTemplateIdEntityProxy {
    return IdOrTemplateIdOrTemplateIdEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrTemplateIdOrTemplateIdEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrTemplateIdOrTemplateIdEntityProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.#text = d.#text;
  }
}

export class IdOrSetIdProxy {
  public readonly @root: string;
  public readonly @extension: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrSetIdProxy {
    return IdOrSetIdProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrSetIdProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    checkNumber(d.@extension, false, field + ".@extension");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrSetIdProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
  }
}

export class CodeOrRouteCodeProxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): CodeOrRouteCodeProxy {
    return CodeOrRouteCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CodeOrRouteCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, false, field + ".@displayName");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new CodeOrRouteCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class AdministrativeGenderCodeOrConfidentialityCodeProxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): AdministrativeGenderCodeOrConfidentialityCodeProxy {
    return AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AdministrativeGenderCodeOrConfidentialityCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new AdministrativeGenderCodeOrConfidentialityCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.#text = d.#text;
  }
}

export class SignatureCodeOrLanguageCodeProxy {
  public readonly @code: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): SignatureCodeOrLanguageCodeProxy {
    return SignatureCodeOrLanguageCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SignatureCodeOrLanguageCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new SignatureCodeOrLanguageCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.#text = d.#text;
  }
}

export class RecordTargetProxy {
  public readonly patientRole: PatientRoleProxy;
  public static Parse(d: string): RecordTargetProxy {
    return RecordTargetProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RecordTargetProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.patientRole = PatientRoleProxy.Create(d.patientRole, field + ".patientRole");
    return new RecordTargetProxy(d);
  }
  private constructor(d: any) {
    this.patientRole = d.patientRole;
  }
}

export class PatientRoleProxy {
  public readonly id: IdEntityProxy[] | null;
  public readonly addr: AddrProxy;
  public readonly telecom: TelecomOrReferenceProxy;
  public readonly patient: Patient1Proxy;
  public readonly providerOrganization: ProviderOrganizationProxy;
  public static Parse(d: string): PatientRoleProxy {
    return PatientRoleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PatientRoleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.id, field + ".id");
    if (d.id) {
      for (let i = 0; i < d.id.length; i++) {
        d.id[i] = IdEntityProxy.Create(d.id[i], field + ".id" + "[" + i + "]");
      }
    }
    if (d.id === undefined) {
      d.id = null;
    }
    d.addr = AddrProxy.Create(d.addr, field + ".addr");
    d.telecom = TelecomOrReferenceProxy.Create(d.telecom, field + ".telecom");
    d.patient = Patient1Proxy.Create(d.patient, field + ".patient");
    d.providerOrganization = ProviderOrganizationProxy.Create(d.providerOrganization, field + ".providerOrganization");
    return new PatientRoleProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.addr = d.addr;
    this.telecom = d.telecom;
    this.patient = d.patient;
    this.providerOrganization = d.providerOrganization;
  }
}

export class IdEntityProxy {
  public readonly @root: string | null;
  public readonly @extension: number | string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @nullFlavor: string | null;
  public static Parse(d: string): IdEntityProxy {
    return IdEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, true, field + ".@root");
    if (d.@root === undefined) {
      d.@root = null;
    }
    // This will be refactored in the next release.
    try {
      checkNumber(d.@extension, false, field + ".@extension");
    } catch (e) {
      try {
        checkString(d.@extension, false, field + ".@extension");
      } catch (e) {
        throw e;
      }
    }
    if (d.@extension === undefined) {
      d.@extension = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@nullFlavor, true, field + ".@nullFlavor");
    if (d.@nullFlavor === undefined) {
      d.@nullFlavor = null;
    }
    return new IdEntityProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
    this.@nullFlavor = d.@nullFlavor;
  }
}

export class AddrProxy {
  public readonly @use: string;
  public readonly state: string;
  public readonly city: string;
  public readonly postalCode: number;
  public readonly streetNameType: string;
  public readonly streetName: string;
  public readonly houseNumber: number;
  public readonly additionalLocator: (number | string)[] | null;
  public static Parse(d: string): AddrProxy {
    return AddrProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AddrProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@use, false, field + ".@use");
    checkString(d.state, false, field + ".state");
    checkString(d.city, false, field + ".city");
    checkNumber(d.postalCode, false, field + ".postalCode");
    checkString(d.streetNameType, false, field + ".streetNameType");
    checkString(d.streetName, false, field + ".streetName");
    checkNumber(d.houseNumber, false, field + ".houseNumber");
    checkArray(d.additionalLocator, field + ".additionalLocator");
    if (d.additionalLocator) {
      for (let i = 0; i < d.additionalLocator.length; i++) {
        // This will be refactored in the next release.
        try {
          checkNumber(d.additionalLocator[i], false, field + ".additionalLocator" + "[" + i + "]");
        } catch (e) {
          try {
            checkString(d.additionalLocator[i], false, field + ".additionalLocator" + "[" + i + "]");
          } catch (e) {
            throw e;
          }
        }
      }
    }
    if (d.additionalLocator === undefined) {
      d.additionalLocator = null;
    }
    return new AddrProxy(d);
  }
  private constructor(d: any) {
    this.@use = d.@use;
    this.state = d.state;
    this.city = d.city;
    this.postalCode = d.postalCode;
    this.streetNameType = d.streetNameType;
    this.streetName = d.streetName;
    this.houseNumber = d.houseNumber;
    this.additionalLocator = d.additionalLocator;
  }
}

export class TelecomOrReferenceProxy {
  public readonly @value: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TelecomOrReferenceProxy {
    return TelecomOrReferenceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TelecomOrReferenceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new TelecomOrReferenceProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class Patient1Proxy {
  public readonly name: NameProxy;
  public readonly administrativeGenderCode: AdministrativeGenderCodeOrConfidentialityCodeProxy;
  public readonly birthTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): Patient1Proxy {
    return Patient1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Patient1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.name = NameProxy.Create(d.name, field + ".name");
    d.administrativeGenderCode = AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(d.administrativeGenderCode, field + ".administrativeGenderCode");
    d.birthTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.birthTime, field + ".birthTime");
    return new Patient1Proxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
    this.administrativeGenderCode = d.administrativeGenderCode;
    this.birthTime = d.birthTime;
  }
}

export class NameProxy {
  public readonly family: string[] | null;
  public readonly given: string;
  public static Parse(d: string): NameProxy {
    return NameProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): NameProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.family, field + ".family");
    if (d.family) {
      for (let i = 0; i < d.family.length; i++) {
        checkString(d.family[i], false, field + ".family" + "[" + i + "]");
      }
    }
    if (d.family === undefined) {
      d.family = null;
    }
    checkString(d.given, false, field + ".given");
    return new NameProxy(d);
  }
  private constructor(d: any) {
    this.family = d.family;
    this.given = d.given;
  }
}

export class ProviderOrganizationProxy {
  public readonly name: string;
  public static Parse(d: string): ProviderOrganizationProxy {
    return ProviderOrganizationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProviderOrganizationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    return new ProviderOrganizationProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
  }
}

export class AuthorProxy {
  public readonly time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly assignedAuthor: AssignedAuthorProxy;
  public static Parse(d: string): AuthorProxy {
    return AuthorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AuthorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.time = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.time, field + ".time");
    d.assignedAuthor = AssignedAuthorProxy.Create(d.assignedAuthor, field + ".assignedAuthor");
    return new AuthorProxy(d);
  }
  private constructor(d: any) {
    this.time = d.time;
    this.assignedAuthor = d.assignedAuthor;
  }
}

export class AssignedAuthorProxy {
  public readonly id: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly assignedAuthoringDevice: AssignedAuthoringDeviceProxy;
  public static Parse(d: string): AssignedAuthorProxy {
    return AssignedAuthorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedAuthorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.id, field + ".id");
    d.assignedAuthoringDevice = AssignedAuthoringDeviceProxy.Create(d.assignedAuthoringDevice, field + ".assignedAuthoringDevice");
    return new AssignedAuthorProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.assignedAuthoringDevice = d.assignedAuthoringDevice;
  }
}

export class AssignedAuthoringDeviceProxy {
  public readonly code: CodeOrRouteCodeProxy;
  public readonly softwareName: string;
  public static Parse(d: string): AssignedAuthoringDeviceProxy {
    return AssignedAuthoringDeviceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedAuthoringDeviceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    checkString(d.softwareName, false, field + ".softwareName");
    return new AssignedAuthoringDeviceProxy(d);
  }
  private constructor(d: any) {
    this.code = d.code;
    this.softwareName = d.softwareName;
  }
}

export class IdOrTextOrCodeOrInformantProxy {
  public readonly @nullFlavor: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrTextOrCodeOrInformantProxy {
    return IdOrTextOrCodeOrInformantProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrTextOrCodeOrInformantProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@nullFlavor, false, field + ".@nullFlavor");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrTextOrCodeOrInformantProxy(d);
  }
  private constructor(d: any) {
    this.@nullFlavor = d.@nullFlavor;
    this.#text = d.#text;
  }
}

export class CustodianProxy {
  public readonly assignedCustodian: AssignedCustodianProxy;
  public static Parse(d: string): CustodianProxy {
    return CustodianProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CustodianProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.assignedCustodian = AssignedCustodianProxy.Create(d.assignedCustodian, field + ".assignedCustodian");
    return new CustodianProxy(d);
  }
  private constructor(d: any) {
    this.assignedCustodian = d.assignedCustodian;
  }
}

export class AssignedCustodianProxy {
  public readonly @classCode: string;
  public readonly representedCustodianOrganization: RepresentedCustodianOrganizationProxy;
  public static Parse(d: string): AssignedCustodianProxy {
    return AssignedCustodianProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedCustodianProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    d.representedCustodianOrganization = RepresentedCustodianOrganizationProxy.Create(d.representedCustodianOrganization, field + ".representedCustodianOrganization");
    return new AssignedCustodianProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.representedCustodianOrganization = d.representedCustodianOrganization;
  }
}

export class RepresentedCustodianOrganizationProxy {
  public readonly @classCode: string;
  public readonly @determinerCode: string;
  public readonly id: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly name: string;
  public static Parse(d: string): RepresentedCustodianOrganizationProxy {
    return RepresentedCustodianOrganizationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RepresentedCustodianOrganizationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@determinerCode, false, field + ".@determinerCode");
    d.id = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.id, field + ".id");
    checkString(d.name, false, field + ".name");
    return new RepresentedCustodianOrganizationProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@determinerCode = d.@determinerCode;
    this.id = d.id;
    this.name = d.name;
  }
}

export class LegalAuthenticatorProxy {
  public readonly time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly signatureCode: SignatureCodeOrLanguageCodeProxy;
  public readonly assignedEntity: AssignedEntityProxy;
  public static Parse(d: string): LegalAuthenticatorProxy {
    return LegalAuthenticatorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LegalAuthenticatorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.time = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.time, field + ".time");
    d.signatureCode = SignatureCodeOrLanguageCodeProxy.Create(d.signatureCode, field + ".signatureCode");
    d.assignedEntity = AssignedEntityProxy.Create(d.assignedEntity, field + ".assignedEntity");
    return new LegalAuthenticatorProxy(d);
  }
  private constructor(d: any) {
    this.time = d.time;
    this.signatureCode = d.signatureCode;
    this.assignedEntity = d.assignedEntity;
  }
}

export class AssignedEntityProxy {
  public readonly id: IdOrTextOrCodeOrInformantProxy;
  public static Parse(d: string): AssignedEntityProxy {
    return AssignedEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrTextOrCodeOrInformantProxy.Create(d.id, field + ".id");
    return new AssignedEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
  }
}

export class DocumentationOfProxy {
  public readonly serviceEvent: ServiceEventProxy;
  public static Parse(d: string): DocumentationOfProxy {
    return DocumentationOfProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DocumentationOfProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.serviceEvent = ServiceEventProxy.Create(d.serviceEvent, field + ".serviceEvent");
    return new DocumentationOfProxy(d);
  }
  private constructor(d: any) {
    this.serviceEvent = d.serviceEvent;
  }
}

export class ServiceEventProxy {
  public readonly effectiveTime: EffectiveTimeProxy;
  public static Parse(d: string): ServiceEventProxy {
    return ServiceEventProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ServiceEventProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.effectiveTime = EffectiveTimeProxy.Create(d.effectiveTime, field + ".effectiveTime");
    return new ServiceEventProxy(d);
  }
  private constructor(d: any) {
    this.effectiveTime = d.effectiveTime;
  }
}

export class EffectiveTimeProxy {
  public readonly high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): EffectiveTimeProxy {
    return EffectiveTimeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EffectiveTimeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.high = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.high, field + ".high");
    return new EffectiveTimeProxy(d);
  }
  private constructor(d: any) {
    this.high = d.high;
  }
}

export class RelatedDocumentProxy {
  public readonly @typeCode: string;
  public readonly parentDocument: ParentDocumentProxy;
  public static Parse(d: string): RelatedDocumentProxy {
    return RelatedDocumentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RelatedDocumentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@typeCode, false, field + ".@typeCode");
    d.parentDocument = ParentDocumentProxy.Create(d.parentDocument, field + ".parentDocument");
    return new RelatedDocumentProxy(d);
  }
  private constructor(d: any) {
    this.@typeCode = d.@typeCode;
    this.parentDocument = d.parentDocument;
  }
}

export class ParentDocumentProxy {
  public readonly id: IdOrSetIdProxy;
  public readonly setId: IdOrSetIdProxy;
  public readonly versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): ParentDocumentProxy {
    return ParentDocumentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ParentDocumentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d.setId = IdOrSetIdProxy.Create(d.setId, field + ".setId");
    d.versionNumber = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.versionNumber, field + ".versionNumber");
    return new ParentDocumentProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.setId = d.setId;
    this.versionNumber = d.versionNumber;
  }
}

export class ComponentProxy {
  public readonly structuredBody: StructuredBodyProxy;
  public static Parse(d: string): ComponentProxy {
    return ComponentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ComponentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.structuredBody = StructuredBodyProxy.Create(d.structuredBody, field + ".structuredBody");
    return new ComponentProxy(d);
  }
  private constructor(d: any) {
    this.structuredBody = d.structuredBody;
  }
}

export class StructuredBodyProxy {
  public readonly component: ComponentEntityProxy[] | null;
  public static Parse(d: string): StructuredBodyProxy {
    return StructuredBodyProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StructuredBodyProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.component, field + ".component");
    if (d.component) {
      for (let i = 0; i < d.component.length; i++) {
        d.component[i] = ComponentEntityProxy.Create(d.component[i], field + ".component" + "[" + i + "]");
      }
    }
    if (d.component === undefined) {
      d.component = null;
    }
    return new StructuredBodyProxy(d);
  }
  private constructor(d: any) {
    this.component = d.component;
  }
}

export class ComponentEntityProxy {
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly section: SectionProxy;
  public static Parse(d: string): ComponentEntityProxy {
    return ComponentEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ComponentEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.templateId = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId, field + ".templateId");
    d.section = SectionProxy.Create(d.section, field + ".section");
    return new ComponentEntityProxy(d);
  }
  private constructor(d: any) {
    this.templateId = d.templateId;
    this.section = d.section;
  }
}

export class SectionProxy {
  public readonly title: string;
  public readonly _text: string | Proxy;
  public readonly code: CodeProxy | null;
  public readonly entry: EntryEntityProxy[] | null | 1Proxy;
  public static Parse(d: string): SectionProxy {
    return SectionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SectionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.title, false, field + ".title");
    // This will be refactored in the next release.
    try {
      checkString(d._text, false, field + "._text");
    } catch (e) {
      try {
        d._text = Proxy.Create(d._text, field + "._text");
      } catch (e) {
        throw e;
      }
    }
    d.code = CodeProxy.Create(d.code, field + ".code");
    if (d.code === undefined) {
      d.code = null;
    }
    // This will be refactored in the next release.
    try {
      checkArray(d.entry, field + ".entry");
      if (d.entry) {
        for (let i = 0; i < d.entry.length; i++) {
          d.entry[i] = EntryEntityProxy.Create(d.entry[i], field + ".entry" + "[" + i + "]");
        }
      }
      if (d.entry === undefined) {
        d.entry = null;
      }
    } catch (e) {
      try {
        d.entry = 1Proxy.Create(d.entry, field + ".entry");
      } catch (e) {
        throw e;
      }
    }
    if (d.entry === undefined) {
      d.entry = null;
    }
    return new SectionProxy(d);
  }
  private constructor(d: any) {
    this.title = d.title;
    this._text = d._text;
    this.code = d.code;
    this.entry = d.entry;
  }
}

export class Proxy {
  public readonly list: ListProxy | null;
  public readonly _table: TableProxy | null;
  public static Parse(d: string): Proxy {
    return Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.list = ListProxy.Create(d.list, field + ".list");
    if (d.list === undefined) {
      d.list = null;
    }
    d._table = TableProxy.Create(d._table, field + "._table");
    if (d._table === undefined) {
      d._table = null;
    }
    return new Proxy(d);
  }
  private constructor(d: any) {
    this.list = d.list;
    this._table = d._table;
  }
}

export class ListProxy {
  public readonly item: (string | ItemEntityOrItemProxy)[] | null | ItemEntityOrItemProxy;
  public static Parse(d: string): ListProxy | null {
    return ListProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    // This will be refactored in the next release.
    try {
      checkArray(d.item, field + ".item");
      if (d.item) {
        for (let i = 0; i < d.item.length; i++) {
          // This will be refactored in the next release.
          try {
            checkString(d.item[i], false, field + ".item" + "[" + i + "]");
          } catch (e) {
            try {
              d.item[i] = ItemEntityOrItemProxy.Create(d.item[i], field + ".item" + "[" + i + "]");
            } catch (e) {
              throw e;
            }
          }
        }
      }
      if (d.item === undefined) {
        d.item = null;
      }
    } catch (e) {
      try {
        d.item = ItemEntityOrItemProxy.Create(d.item, field + ".item");
      } catch (e) {
        throw e;
      }
    }
    if (d.item === undefined) {
      d.item = null;
    }
    return new ListProxy(d);
  }
  private constructor(d: any) {
    this.item = d.item;
  }
}

export class ItemEntityOrItemProxy {
  public readonly @ID: string;
  public readonly #text: string;
  public static Parse(d: string): ItemEntityOrItemProxy {
    return ItemEntityOrItemProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemEntityOrItemProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@ID, false, field + ".@ID");
    checkString(d.#text, false, field + ".#text");
    return new ItemEntityOrItemProxy(d);
  }
  private constructor(d: any) {
    this.@ID = d.@ID;
    this.#text = d.#text;
  }
}

export class TableProxy {
  public readonly thead: TheadProxy;
  public readonly tbody: TbodyProxy;
  public static Parse(d: string): TableProxy | null {
    return TableProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TableProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    d.thead = TheadProxy.Create(d.thead, field + ".thead");
    d.tbody = TbodyProxy.Create(d.tbody, field + ".tbody");
    return new TableProxy(d);
  }
  private constructor(d: any) {
    this.thead = d.thead;
    this.tbody = d.tbody;
  }
}

export class TheadProxy {
  public readonly tr: TrEntityProxy[] | null;
  public static Parse(d: string): TheadProxy {
    return TheadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TheadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.tr, field + ".tr");
    if (d.tr) {
      for (let i = 0; i < d.tr.length; i++) {
        d.tr[i] = TrEntityProxy.Create(d.tr[i], field + ".tr" + "[" + i + "]");
      }
    }
    if (d.tr === undefined) {
      d.tr = null;
    }
    return new TheadProxy(d);
  }
  private constructor(d: any) {
    this.tr = d.tr;
  }
}

export class TrEntityProxy {
  public readonly th: (string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy | string)[] | null;
  public static Parse(d: string): TrEntityProxy {
    return TrEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TrEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.th, field + ".th");
    if (d.th) {
      for (let i = 0; i < d.th.length; i++) {
        // This will be refactored in the next release.
        try {
          checkString(d.th[i], false, field + ".th" + "[" + i + "]");
        } catch (e) {
          try {
            d.th[i] = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.th[i], field + ".th" + "[" + i + "]");
          } catch (e) {
            try {
              // This will be refactored in the next release.
              try {
                d.th[i] = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.th[i], field + ".th" + "[" + i + "]");
              } catch (e) {
                try {
                  checkString(d.th[i], false, field + ".th" + "[" + i + "]");
                } catch (e) {
                  throw e;
                }
              }
            } catch (e) {
              throw e;
            }
          }
        }
      }
    }
    if (d.th === undefined) {
      d.th = null;
    }
    return new TrEntityProxy(d);
  }
  private constructor(d: any) {
    this.th = d.th;
  }
}

export class TbodyProxy {
  public readonly tr: TrEntity1Proxy[] | null;
  public static Parse(d: string): TbodyProxy {
    return TbodyProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TbodyProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.tr, field + ".tr");
    if (d.tr) {
      for (let i = 0; i < d.tr.length; i++) {
        d.tr[i] = TrEntity1Proxy.Create(d.tr[i], field + ".tr" + "[" + i + "]");
      }
    }
    if (d.tr === undefined) {
      d.tr = null;
    }
    return new TbodyProxy(d);
  }
  private constructor(d: any) {
    this.tr = d.tr;
  }
}

export class TrEntity1Proxy {
  public readonly td: (2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string)[] | null;
  public static Parse(d: string): TrEntity1Proxy {
    return TrEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TrEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.td, field + ".td");
    if (d.td) {
      for (let i = 0; i < d.td.length; i++) {
        // This will be refactored in the next release.
        try {
          d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
        } catch (e) {
          try {
            checkString(d.td[i], false, field + ".td" + "[" + i + "]");
          } catch (e) {
            try {
              // This will be refactored in the next release.
              try {
                d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
              } catch (e) {
                try {
                  checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                } catch (e) {
                  try {
                    // This will be refactored in the next release.
                    try {
                      d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                    } catch (e) {
                      try {
                        checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                      } catch (e) {
                        try {
                          // This will be refactored in the next release.
                          try {
                            d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                          } catch (e) {
                            try {
                              checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                            } catch (e) {
                              try {
                                // This will be refactored in the next release.
                                try {
                                  d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                } catch (e) {
                                  try {
                                    checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                  } catch (e) {
                                    try {
                                      // This will be refactored in the next release.
                                      try {
                                        d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                      } catch (e) {
                                        try {
                                          checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                        } catch (e) {
                                          try {
                                            // This will be refactored in the next release.
                                            try {
                                              d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                            } catch (e) {
                                              try {
                                                checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                              } catch (e) {
                                                throw e;
                                              }
                                            }
                                          } catch (e) {
                                            throw e;
                                          }
                                        }
                                      }
                                    } catch (e) {
                                      throw e;
                                    }
                                  }
                                }
                              } catch (e) {
                                throw e;
                              }
                            }
                          }
                        } catch (e) {
                          throw e;
                        }
                      }
                    }
                  } catch (e) {
                    throw e;
                  }
                }
              }
            } catch (e) {
              throw e;
            }
          }
        }
      }
    }
    if (d.td === undefined) {
      d.td = null;
    }
    return new TrEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.td = d.td;
  }
}

export class 2Proxy {
  public readonly list: List1Proxy;
  public static Parse(d: string): 2Proxy {
    return 2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): 2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.list = List1Proxy.Create(d.list, field + ".list");
    return new 2Proxy(d);
  }
  private constructor(d: any) {
    this.list = d.list;
  }
}

export class List1Proxy {
  public readonly item: string;
  public static Parse(d: string): List1Proxy {
    return List1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): List1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.item, false, field + ".item");
    return new List1Proxy(d);
  }
  private constructor(d: any) {
    this.item = d.item;
  }
}

export class CodeProxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string | null;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): CodeProxy | null {
    return CodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CodeProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, true, field + ".@displayName");
    if (d.@displayName === undefined) {
      d.@displayName = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new CodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
  }
}

export class EntryEntityProxy {
  public readonly observation: ObservationProxy | null;
  public readonly @typeCode: string | null;
  public readonly @contextConductionInd: boolean | null;
  public readonly substanceAdministration: SubstanceAdministrationProxy | null;
  public static Parse(d: string): EntryEntityProxy {
    return EntryEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntryEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.observation = ObservationProxy.Create(d.observation, field + ".observation");
    if (d.observation === undefined) {
      d.observation = null;
    }
    checkString(d.@typeCode, true, field + ".@typeCode");
    if (d.@typeCode === undefined) {
      d.@typeCode = null;
    }
    checkBoolean(d.@contextConductionInd, true, field + ".@contextConductionInd");
    if (d.@contextConductionInd === undefined) {
      d.@contextConductionInd = null;
    }
    d.substanceAdministration = SubstanceAdministrationProxy.Create(d.substanceAdministration, field + ".substanceAdministration");
    if (d.substanceAdministration === undefined) {
      d.substanceAdministration = null;
    }
    return new EntryEntityProxy(d);
  }
  private constructor(d: any) {
    this.observation = d.observation;
    this.@typeCode = d.@typeCode;
    this.@contextConductionInd = d.@contextConductionInd;
    this.substanceAdministration = d.substanceAdministration;
  }
}

export class ObservationProxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly code: CodeOrRouteCodeProxy;
  public readonly effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly value: ValueProxy;
  public static Parse(d: string): ObservationProxy | null {
    return ObservationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ObservationProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    d.effectiveTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.effectiveTime, field + ".effectiveTime");
    d.value = ValueProxy.Create(d.value, field + ".value");
    return new ObservationProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.code = d.code;
    this.effectiveTime = d.effectiveTime;
    this.value = d.value;
  }
}

export class ValueProxy {
  public readonly @xsi:type: string;
  public readonly @code: number | string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string;
  public readonly originalText: OriginalTextProxy;
  public static Parse(d: string): ValueProxy {
    return ValueProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ValueProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    // This will be refactored in the next release.
    try {
      checkNumber(d.@code, false, field + ".@code");
    } catch (e) {
      try {
        checkString(d.@code, false, field + ".@code");
      } catch (e) {
        throw e;
      }
    }
    if (d.@code === undefined) {
      d.@code = null;
    }
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, false, field + ".@displayName");
    d.originalText = OriginalTextProxy.Create(d.originalText, field + ".originalText");
    return new ValueProxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.originalText = d.originalText;
  }
}

export class OriginalTextProxy {
  public readonly reference: TelecomOrReferenceProxy;
  public static Parse(d: string): OriginalTextProxy {
    return OriginalTextProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OriginalTextProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.reference = TelecomOrReferenceProxy.Create(d.reference, field + ".reference");
    return new OriginalTextProxy(d);
  }
  private constructor(d: any) {
    this.reference = d.reference;
  }
}

export class SubstanceAdministrationProxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy[] | null;
  public readonly id: IdOrSetIdProxy;
  public readonly _text: IdOrTextOrCodeOrInformantProxy;
  public readonly effectiveTime: EffectiveTimeEntityProxy[] | null;
  public readonly routeCode: CodeOrRouteCodeProxy;
  public readonly doseQuantity: DoseQuantityProxy;
  public readonly consumable: ConsumableProxy;
  public static Parse(d: string): SubstanceAdministrationProxy | null {
    return SubstanceAdministrationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SubstanceAdministrationProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    checkArray(d.templateId, field + ".templateId");
    if (d.templateId) {
      for (let i = 0; i < d.templateId.length; i++) {
        d.templateId[i] = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId[i], field + ".templateId" + "[" + i + "]");
      }
    }
    if (d.templateId === undefined) {
      d.templateId = null;
    }
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d._text = IdOrTextOrCodeOrInformantProxy.Create(d._text, field + "._text");
    checkArray(d.effectiveTime, field + ".effectiveTime");
    if (d.effectiveTime) {
      for (let i = 0; i < d.effectiveTime.length; i++) {
        d.effectiveTime[i] = EffectiveTimeEntityProxy.Create(d.effectiveTime[i], field + ".effectiveTime" + "[" + i + "]");
      }
    }
    if (d.effectiveTime === undefined) {
      d.effectiveTime = null;
    }
    d.routeCode = CodeOrRouteCodeProxy.Create(d.routeCode, field + ".routeCode");
    d.doseQuantity = DoseQuantityProxy.Create(d.doseQuantity, field + ".doseQuantity");
    d.consumable = ConsumableProxy.Create(d.consumable, field + ".consumable");
    return new SubstanceAdministrationProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.templateId = d.templateId;
    this.id = d.id;
    this._text = d._text;
    this.effectiveTime = d.effectiveTime;
    this.routeCode = d.routeCode;
    this.doseQuantity = d.doseQuantity;
    this.consumable = d.consumable;
  }
}

export class EffectiveTimeEntityProxy {
  public readonly @xsi:type: string;
  public readonly low: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null;
  public readonly high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null;
  public readonly _at_operator: string | null;
  public readonly period: PeriodProxy | null;
  public static Parse(d: string): EffectiveTimeEntityProxy {
    return EffectiveTimeEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EffectiveTimeEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    d.low = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy.Create(d.low, field + ".low");
    if (d.low === undefined) {
      d.low = null;
    }
    d.high = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy.Create(d.high, field + ".high");
    if (d.high === undefined) {
      d.high = null;
    }
    checkString(d._at_operator, true, field + "._at_operator");
    if (d._at_operator === undefined) {
      d._at_operator = null;
    }
    d.period = PeriodProxy.Create(d.period, field + ".period");
    if (d.period === undefined) {
      d.period = null;
    }
    return new EffectiveTimeEntityProxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.low = d.low;
    this.high = d.high;
    this._at_operator = d._at_operator;
    this.period = d.period;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class PeriodProxy {
  public readonly @unit: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): PeriodProxy | null {
    return PeriodProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PeriodProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@unit, false, field + ".@unit");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new PeriodProxy(d);
  }
  private constructor(d: any) {
    this.@unit = d.@unit;
    this.#text = d.#text;
  }
}

export class DoseQuantityProxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @unit: string | null;
  public static Parse(d: string): DoseQuantityProxy {
    return DoseQuantityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DoseQuantityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@unit, true, field + ".@unit");
    if (d.@unit === undefined) {
      d.@unit = null;
    }
    return new DoseQuantityProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
    this.@unit = d.@unit;
  }
}

export class ConsumableProxy {
  public readonly manufacturedProduct: ManufacturedProductProxy;
  public static Parse(d: string): ConsumableProxy {
    return ConsumableProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConsumableProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.manufacturedProduct = ManufacturedProductProxy.Create(d.manufacturedProduct, field + ".manufacturedProduct");
    return new ConsumableProxy(d);
  }
  private constructor(d: any) {
    this.manufacturedProduct = d.manufacturedProduct;
  }
}

export class ManufacturedProductProxy {
  public readonly @classCode: string;
  public readonly manufacturedMaterial: ManufacturedMaterialProxy;
  public static Parse(d: string): ManufacturedProductProxy {
    return ManufacturedProductProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ManufacturedProductProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    d.manufacturedMaterial = ManufacturedMaterialProxy.Create(d.manufacturedMaterial, field + ".manufacturedMaterial");
    return new ManufacturedProductProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.manufacturedMaterial = d.manufacturedMaterial;
  }
}

export class ManufacturedMaterialProxy {
  public readonly @classCode: string;
  public readonly @determinerCode: string;
  public readonly code: CodeOrRouteCodeProxy;
  public static Parse(d: string): ManufacturedMaterialProxy {
    return ManufacturedMaterialProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ManufacturedMaterialProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@determinerCode, false, field + ".@determinerCode");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    return new ManufacturedMaterialProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@determinerCode = d.@determinerCode;
    this.code = d.code;
  }
}

export class 1Proxy {
  public readonly observation: Observation1Proxy;
  public static Parse(d: string): 1Proxy {
    return 1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): 1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.observation = Observation1Proxy.Create(d.observation, field + ".observation");
    return new 1Proxy(d);
  }
  private constructor(d: any) {
    this.observation = d.observation;
  }
}

export class Observation1Proxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly code: Code1Proxy;
  public readonly value: Value1Proxy;
  public static Parse(d: string): Observation1Proxy {
    return Observation1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Observation1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    d.code = Code1Proxy.Create(d.code, field + ".code");
    d.value = Value1Proxy.Create(d.value, field + ".value");
    return new Observation1Proxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.code = d.code;
    this.value = d.value;
  }
}

export class Code1Proxy {
  public readonly @code: string | null;
  public readonly @codeSystem: string | null;
  public readonly @codeSystemName: string | null;
  public readonly @displayName: string | null;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @nullFlavor: string | null;
  public static Parse(d: string): Code1Proxy {
    return Code1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Code1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, true, field + ".@code");
    if (d.@code === undefined) {
      d.@code = null;
    }
    checkString(d.@codeSystem, true, field + ".@codeSystem");
    if (d.@codeSystem === undefined) {
      d.@codeSystem = null;
    }
    checkString(d.@codeSystemName, true, field + ".@codeSystemName");
    if (d.@codeSystemName === undefined) {
      d.@codeSystemName = null;
    }
    checkString(d.@displayName, true, field + ".@displayName");
    if (d.@displayName === undefined) {
      d.@displayName = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@nullFlavor, true, field + ".@nullFlavor");
    if (d.@nullFlavor === undefined) {
      d.@nullFlavor = null;
    }
    return new Code1Proxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
    this.@nullFlavor = d.@nullFlavor;
  }
}

export class Value1Proxy {
  public readonly @xsi:type: string;
  public readonly @displayName: string;
  public readonly originalText: OriginalTextProxy;
  public static Parse(d: string): Value1Proxy {
    return Value1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Value1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    checkString(d.@displayName, false, field + ".@displayName");
    d.originalText = OriginalTextProxy.Create(d.originalText, field + ".originalText");
    return new Value1Proxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.@displayName = d.@displayName;
    this.originalText = d.originalText;
  }
}

export class ObservationsProxy {
  public readonly ListaRICs: ListaRICsEntityProxy[] | null;
  public readonly NumPagina: number;
  public readonly Status: number;
  public readonly TotalResultado: number;
  public static Parse(d: string): ObservationsProxy {
    return ObservationsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ObservationsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.ListaRICs, field + ".ListaRICs");
    if (d.ListaRICs) {
      for (let i = 0; i < d.ListaRICs.length; i++) {
        d.ListaRICs[i] = ListaRICsEntityProxy.Create(d.ListaRICs[i], field + ".ListaRICs" + "[" + i + "]");
      }
    }
    if (d.ListaRICs === undefined) {
      d.ListaRICs = null;
    }
    checkNumber(d.NumPagina, false, field + ".NumPagina");
    checkNumber(d.Status, false, field + ".Status");
    checkNumber(d.TotalResultado, false, field + ".TotalResultado");
    return new ObservationsProxy(d);
  }
  private constructor(d: any) {
    this.ListaRICs = d.ListaRICs;
    this.NumPagina = d.NumPagina;
    this.Status = d.Status;
    this.TotalResultado = d.TotalResultado;
  }
}

export class ListaRICsEntityProxy {
  public readonly IdRIC: number;
  public readonly ListaRICValor: ListaRICValorEntityProxy[] | null;
  public static Parse(d: string): ListaRICsEntityProxy {
    return ListaRICsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaRICsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.IdRIC, false, field + ".IdRIC");
    checkArray(d.ListaRICValor, field + ".ListaRICValor");
    if (d.ListaRICValor) {
      for (let i = 0; i < d.ListaRICValor.length; i++) {
        d.ListaRICValor[i] = ListaRICValorEntityProxy.Create(d.ListaRICValor[i], field + ".ListaRICValor" + "[" + i + "]");
      }
    }
    if (d.ListaRICValor === undefined) {
      d.ListaRICValor = null;
    }
    return new ListaRICsEntityProxy(d);
  }
  private constructor(d: any) {
    this.IdRIC = d.IdRIC;
    this.ListaRICValor = d.ListaRICValor;
  }
}

export class ListaRICValorEntityProxy {
  public readonly ElementoCatalogo: number;
  public readonly FechaMedicion: string;
  public readonly FechaRegistro: string;
  public readonly IdIdioma: number;
  public readonly IdProcedencia: number;
  public readonly ProfesionalRegistro: string;
  public readonly PuntuacionTotal: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null;
  public readonly Tipo: number;
  public readonly TipoDato: number;
  public readonly UnidadMedida: string;
  public readonly Valor: string;
  public readonly PuntuacionTo2023-12-04T13:32:27.087742367Z tal: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null;
  public static Parse(d: string): ListaRICValorEntityProxy {
    return ListaRICValorEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaRICValorEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.ElementoCatalogo, false, field + ".ElementoCatalogo");
    checkString(d.FechaMedicion, false, field + ".FechaMedicion");
    checkString(d.FechaRegistro, false, field + ".FechaRegistro");
    checkNumber(d.IdIdioma, false, field + ".IdIdioma");
    checkNumber(d.IdProcedencia, false, field + ".IdProcedencia");
    checkString(d.ProfesionalRegistro, false, field + ".ProfesionalRegistro");
    d.PuntuacionTotal = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy.Create(d.PuntuacionTotal, field + ".PuntuacionTotal");
    if (d.PuntuacionTotal === undefined) {
      d.PuntuacionTotal = null;
    }
    checkNumber(d.Tipo, false, field + ".Tipo");
    checkNumber(d.TipoDato, false, field + ".TipoDato");
    checkString(d.UnidadMedida, false, field + ".UnidadMedida");
    checkString(d.Valor, false, field + ".Valor");
    d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy.Create(d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal, field + ".PuntuacionTo2023-12-04T13:32:27.087742367Z tal");
    if (d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal === undefined) {
      d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = null;
    }
    return new ListaRICValorEntityProxy(d);
  }
  private constructor(d: any) {
    this.ElementoCatalogo = d.ElementoCatalogo;
    this.FechaMedicion = d.FechaMedicion;
    this.FechaRegistro = d.FechaRegistro;
    this.IdIdioma = d.IdIdioma;
    this.IdProcedencia = d.IdProcedencia;
    this.ProfesionalRegistro = d.ProfesionalRegistro;
    this.PuntuacionTotal = d.PuntuacionTotal;
    this.Tipo = d.Tipo;
    this.TipoDato = d.TipoDato;
    this.UnidadMedida = d.UnidadMedida;
    this.Valor = d.Valor;
    this.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy(d);
  }
  private constructor(d: any) {
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy(d);
  }
  private constructor(d: any) {
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class ConvertedJson.jsonProxy {
  public readonly patient: PatientProxy;
  public readonly prescriptions: Prescriptions1Proxy;
  public readonly labResults: LabResultsEntityProxy[] | null;
  public readonly conditions: Conditions1Proxy;
  public readonly observations: ObservationsProxy;
  public static Parse(d: string): ConvertedJson.jsonProxy {
    return ConvertedJson.jsonProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConvertedJson.jsonProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.patient = PatientProxy.Create(d.patient, field + ".patient");
    d.prescriptions = Prescriptions1Proxy.Create(d.prescriptions, field + ".prescriptions");
    checkArray(d.labResults, field + ".labResults");
    if (d.labResults) {
      for (let i = 0; i < d.labResults.length; i++) {
        d.labResults[i] = LabResultsEntityProxy.Create(d.labResults[i], field + ".labResults" + "[" + i + "]");
      }
    }
    if (d.labResults === undefined) {
      d.labResults = null;
    }
    d.conditions = Conditions1Proxy.Create(d.conditions, field + ".conditions");
    d.observations = ObservationsProxy.Create(d.observations, field + ".observations");
    return new ConvertedJson.jsonProxy(d);
  }
  private constructor(d: any) {
    this.patient = d.patient;
    this.prescriptions = d.prescriptions;
    this.labResults = d.labResults;
    this.conditions = d.conditions;
    this.observations = d.observations;
  }
}

export class PatientProxy {
  public readonly listaPacienteVO: ListaPacienteVOProxy;
  public static Parse(d: string): PatientProxy {
    return PatientProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PatientProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.listaPacienteVO = ListaPacienteVOProxy.Create(d.listaPacienteVO, field + ".listaPacienteVO");
    return new PatientProxy(d);
  }
  private constructor(d: any) {
    this.listaPacienteVO = d.listaPacienteVO;
  }
}

export class ListaPacienteVOProxy {
  public readonly pacienteVO: PacienteVOEntityProxy[] | null;
  public static Parse(d: string): ListaPacienteVOProxy {
    return ListaPacienteVOProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaPacienteVOProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.pacienteVO, field + ".pacienteVO");
    if (d.pacienteVO) {
      for (let i = 0; i < d.pacienteVO.length; i++) {
        d.pacienteVO[i] = PacienteVOEntityProxy.Create(d.pacienteVO[i], field + ".pacienteVO" + "[" + i + "]");
      }
    }
    if (d.pacienteVO === undefined) {
      d.pacienteVO = null;
    }
    return new ListaPacienteVOProxy(d);
  }
  private constructor(d: any) {
    this.pacienteVO = d.pacienteVO;
  }
}

export class PacienteVOEntityProxy {
  public readonly cic: number;
  public readonly nombre: string;
  public readonly apellido1: string;
  public readonly apellido2: string;
  public readonly sexo: SexoProxy;
  public readonly idioma: IdiomaProxy;
  public readonly fechaNacimiento: string;
  public readonly paisNacimiento: string;
  public readonly dni: string;
  public readonly tisnumerica: string;
  public readonly tipoTis: TipoTisProxy;
  public readonly nas: string;
  public readonly codsns: string;
  public readonly email: string;
  public readonly situacion: SituacionProxy;
  public readonly baja: boolean;
  public readonly datosAseguramiento: DatosAseguramientoProxy;
  public readonly listaTelefonos: ListaTelefonosProxy;
  public readonly domicilio: DomicilioProxy;
  public readonly cuposPaciente: CuposPacienteProxy;
  public readonly indEnvioSMS: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly indConfidencial: number;
  public readonly telefonoEnvioSMS: string;
  public static Parse(d: string): PacienteVOEntityProxy {
    return PacienteVOEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PacienteVOEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.cic, false, field + ".cic");
    checkString(d.nombre, false, field + ".nombre");
    checkString(d.apellido1, false, field + ".apellido1");
    checkString(d.apellido2, false, field + ".apellido2");
    d.sexo = SexoProxy.Create(d.sexo, field + ".sexo");
    d.idioma = IdiomaProxy.Create(d.idioma, field + ".idioma");
    checkString(d.fechaNacimiento, false, field + ".fechaNacimiento");
    checkString(d.paisNacimiento, false, field + ".paisNacimiento");
    checkString(d.dni, false, field + ".dni");
    checkString(d.tisnumerica, false, field + ".tisnumerica");
    d.tipoTis = TipoTisProxy.Create(d.tipoTis, field + ".tipoTis");
    checkString(d.nas, false, field + ".nas");
    checkString(d.codsns, false, field + ".codsns");
    checkString(d.email, false, field + ".email");
    d.situacion = SituacionProxy.Create(d.situacion, field + ".situacion");
    checkBoolean(d.baja, false, field + ".baja");
    d.datosAseguramiento = DatosAseguramientoProxy.Create(d.datosAseguramiento, field + ".datosAseguramiento");
    d.listaTelefonos = ListaTelefonosProxy.Create(d.listaTelefonos, field + ".listaTelefonos");
    d.domicilio = DomicilioProxy.Create(d.domicilio, field + ".domicilio");
    d.cuposPaciente = CuposPacienteProxy.Create(d.cuposPaciente, field + ".cuposPaciente");
    d.indEnvioSMS = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.indEnvioSMS, field + ".indEnvioSMS");
    checkNumber(d.indConfidencial, false, field + ".indConfidencial");
    checkString(d.telefonoEnvioSMS, false, field + ".telefonoEnvioSMS");
    return new PacienteVOEntityProxy(d);
  }
  private constructor(d: any) {
    this.cic = d.cic;
    this.nombre = d.nombre;
    this.apellido1 = d.apellido1;
    this.apellido2 = d.apellido2;
    this.sexo = d.sexo;
    this.idioma = d.idioma;
    this.fechaNacimiento = d.fechaNacimiento;
    this.paisNacimiento = d.paisNacimiento;
    this.dni = d.dni;
    this.tisnumerica = d.tisnumerica;
    this.tipoTis = d.tipoTis;
    this.nas = d.nas;
    this.codsns = d.codsns;
    this.email = d.email;
    this.situacion = d.situacion;
    this.baja = d.baja;
    this.datosAseguramiento = d.datosAseguramiento;
    this.listaTelefonos = d.listaTelefonos;
    this.domicilio = d.domicilio;
    this.cuposPaciente = d.cuposPaciente;
    this.indEnvioSMS = d.indEnvioSMS;
    this.indConfidencial = d.indConfidencial;
    this.telefonoEnvioSMS = d.telefonoEnvioSMS;
  }
}

export class SexoProxy {
  public readonly codSexo: string;
  public readonly descripcion: string;
  public static Parse(d: string): SexoProxy {
    return SexoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SexoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codSexo, false, field + ".codSexo");
    checkString(d.descripcion, false, field + ".descripcion");
    return new SexoProxy(d);
  }
  private constructor(d: any) {
    this.codSexo = d.codSexo;
    this.descripcion = d.descripcion;
  }
}

export class IdiomaProxy {
  public readonly codIdioma: string;
  public readonly codIso: string;
  public readonly descripcion: string;
  public static Parse(d: string): IdiomaProxy {
    return IdiomaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdiomaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codIdioma, false, field + ".codIdioma");
    checkString(d.codIso, false, field + ".codIso");
    checkString(d.descripcion, false, field + ".descripcion");
    return new IdiomaProxy(d);
  }
  private constructor(d: any) {
    this.codIdioma = d.codIdioma;
    this.codIso = d.codIso;
    this.descripcion = d.descripcion;
  }
}

export class TipoTisProxy {
  public readonly codTipoTis: string;
  public readonly descripcion: string;
  public static Parse(d: string): TipoTisProxy {
    return TipoTisProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoTisProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTipoTis, false, field + ".codTipoTis");
    checkString(d.descripcion, false, field + ".descripcion");
    return new TipoTisProxy(d);
  }
  private constructor(d: any) {
    this.codTipoTis = d.codTipoTis;
    this.descripcion = d.descripcion;
  }
}

export class SituacionProxy {
  public readonly codSituacion: string;
  public readonly descripcion: string;
  public static Parse(d: string): SituacionProxy {
    return SituacionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SituacionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codSituacion, false, field + ".codSituacion");
    checkString(d.descripcion, false, field + ".descripcion");
    return new SituacionProxy(d);
  }
  private constructor(d: any) {
    this.codSituacion = d.codSituacion;
    this.descripcion = d.descripcion;
  }
}

export class DatosAseguramientoProxy {
  public readonly tipoPoblacion: TipoPoblacionProxy;
  public readonly tipoTemporalidad: TipoTemporalidadProxy;
  public readonly titularidad: TitularidadProxy;
  public readonly tipoCiudadano: TipoCiudadanoProxy;
  public readonly titulo: TituloProxy;
  public readonly indicadorFarmacia: string;
  public readonly cobertura: CoberturaProxy;
  public static Parse(d: string): DatosAseguramientoProxy {
    return DatosAseguramientoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DatosAseguramientoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.tipoPoblacion = TipoPoblacionProxy.Create(d.tipoPoblacion, field + ".tipoPoblacion");
    d.tipoTemporalidad = TipoTemporalidadProxy.Create(d.tipoTemporalidad, field + ".tipoTemporalidad");
    d.titularidad = TitularidadProxy.Create(d.titularidad, field + ".titularidad");
    d.tipoCiudadano = TipoCiudadanoProxy.Create(d.tipoCiudadano, field + ".tipoCiudadano");
    d.titulo = TituloProxy.Create(d.titulo, field + ".titulo");
    checkString(d.indicadorFarmacia, false, field + ".indicadorFarmacia");
    d.cobertura = CoberturaProxy.Create(d.cobertura, field + ".cobertura");
    return new DatosAseguramientoProxy(d);
  }
  private constructor(d: any) {
    this.tipoPoblacion = d.tipoPoblacion;
    this.tipoTemporalidad = d.tipoTemporalidad;
    this.titularidad = d.titularidad;
    this.tipoCiudadano = d.tipoCiudadano;
    this.titulo = d.titulo;
    this.indicadorFarmacia = d.indicadorFarmacia;
    this.cobertura = d.cobertura;
  }
}

export class TipoPoblacionProxy {
  public readonly codTipoPoblacion: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): TipoPoblacionProxy {
    return TipoPoblacionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoPoblacionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoPoblacion, false, field + ".codTipoPoblacion");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new TipoPoblacionProxy(d);
  }
  private constructor(d: any) {
    this.codTipoPoblacion = d.codTipoPoblacion;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class TipoTemporalidadProxy {
  public readonly codTipoTemporalidad: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): TipoTemporalidadProxy {
    return TipoTemporalidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoTemporalidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoTemporalidad, false, field + ".codTipoTemporalidad");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new TipoTemporalidadProxy(d);
  }
  private constructor(d: any) {
    this.codTipoTemporalidad = d.codTipoTemporalidad;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class TitularidadProxy {
  public readonly codTitularidad: string;
  public readonly descripcion: string;
  public static Parse(d: string): TitularidadProxy {
    return TitularidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TitularidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTitularidad, false, field + ".codTitularidad");
    checkString(d.descripcion, false, field + ".descripcion");
    return new TitularidadProxy(d);
  }
  private constructor(d: any) {
    this.codTitularidad = d.codTitularidad;
    this.descripcion = d.descripcion;
  }
}

export class TipoCiudadanoProxy {
  public readonly codTipoCiudadano: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly pensionista: boolean;
  public readonly universalizado: boolean;
  public readonly farmaciaGratuita: boolean;
  public readonly facturable: boolean;
  public static Parse(d: string): TipoCiudadanoProxy {
    return TipoCiudadanoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoCiudadanoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codTipoCiudadano, false, field + ".codTipoCiudadano");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.pensionista, false, field + ".pensionista");
    checkBoolean(d.universalizado, false, field + ".universalizado");
    checkBoolean(d.farmaciaGratuita, false, field + ".farmaciaGratuita");
    checkBoolean(d.facturable, false, field + ".facturable");
    return new TipoCiudadanoProxy(d);
  }
  private constructor(d: any) {
    this.codTipoCiudadano = d.codTipoCiudadano;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.pensionista = d.pensionista;
    this.universalizado = d.universalizado;
    this.farmaciaGratuita = d.farmaciaGratuita;
    this.facturable = d.facturable;
  }
}

export class TituloProxy {
  public readonly codTitulo: string;
  public readonly codTipoTitulo: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): TituloProxy {
    return TituloProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TituloProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codTitulo, false, field + ".codTitulo");
    checkNumber(d.codTipoTitulo, false, field + ".codTipoTitulo");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new TituloProxy(d);
  }
  private constructor(d: any) {
    this.codTitulo = d.codTitulo;
    this.codTipoTitulo = d.codTipoTitulo;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class CoberturaProxy {
  public readonly codCobertura: string;
  public static Parse(d: string): CoberturaProxy {
    return CoberturaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CoberturaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codCobertura, false, field + ".codCobertura");
    return new CoberturaProxy(d);
  }
  private constructor(d: any) {
    this.codCobertura = d.codCobertura;
  }
}

export class ListaTelefonosProxy {
  public readonly telefonos: TelefonosEntityProxy[] | null;
  public static Parse(d: string): ListaTelefonosProxy {
    return ListaTelefonosProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaTelefonosProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.telefonos, field + ".telefonos");
    if (d.telefonos) {
      for (let i = 0; i < d.telefonos.length; i++) {
        d.telefonos[i] = TelefonosEntityProxy.Create(d.telefonos[i], field + ".telefonos" + "[" + i + "]");
      }
    }
    if (d.telefonos === undefined) {
      d.telefonos = null;
    }
    return new ListaTelefonosProxy(d);
  }
  private constructor(d: any) {
    this.telefonos = d.telefonos;
  }
}

export class TelefonosEntityProxy {
  public readonly bdIndiceTelefono: number;
  public readonly strNumTelefono: string;
  public readonly strObservaciones: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TelefonosEntityProxy {
    return TelefonosEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TelefonosEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bdIndiceTelefono, false, field + ".bdIndiceTelefono");
    checkString(d.strNumTelefono, false, field + ".strNumTelefono");
    d.strObservaciones = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.strObservaciones, field + ".strObservaciones");
    return new TelefonosEntityProxy(d);
  }
  private constructor(d: any) {
    this.bdIndiceTelefono = d.bdIndiceTelefono;
    this.strNumTelefono = d.strNumTelefono;
    this.strObservaciones = d.strObservaciones;
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy(d);
  }
  private constructor(d: any) {
  }
}

export class DomicilioProxy {
  public readonly portal: PortalProxy;
  public readonly piso: string;
  public readonly mano: string;
  public readonly pais: PaisProxy;
  public readonly otrosDatos: string;
  public readonly bloque: string;
  public readonly numPortal: string;
  public readonly codPostal: string;
  public static Parse(d: string): DomicilioProxy {
    return DomicilioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DomicilioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.portal = PortalProxy.Create(d.portal, field + ".portal");
    checkString(d.piso, false, field + ".piso");
    checkString(d.mano, false, field + ".mano");
    d.pais = PaisProxy.Create(d.pais, field + ".pais");
    checkString(d.otrosDatos, false, field + ".otrosDatos");
    checkString(d.bloque, false, field + ".bloque");
    checkString(d.numPortal, false, field + ".numPortal");
    checkString(d.codPostal, false, field + ".codPostal");
    return new DomicilioProxy(d);
  }
  private constructor(d: any) {
    this.portal = d.portal;
    this.piso = d.piso;
    this.mano = d.mano;
    this.pais = d.pais;
    this.otrosDatos = d.otrosDatos;
    this.bloque = d.bloque;
    this.numPortal = d.numPortal;
    this.codPostal = d.codPostal;
  }
}

export class PortalProxy {
  public readonly idPortal: number;
  public readonly numero: number;
  public readonly bis: string;
  public readonly tipoPortal: string;
  public readonly idEdificio: number;
  public readonly idBloque: string;
  public readonly eje: number;
  public readonly tramo: TramoProxy;
  public readonly calle: CalleProxy;
  public readonly coordenadas: CoordenadasProxy;
  public static Parse(d: string): PortalProxy {
    return PortalProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PortalProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idPortal, false, field + ".idPortal");
    checkNumber(d.numero, false, field + ".numero");
    checkString(d.bis, false, field + ".bis");
    checkString(d.tipoPortal, false, field + ".tipoPortal");
    checkNumber(d.idEdificio, false, field + ".idEdificio");
    checkString(d.idBloque, false, field + ".idBloque");
    checkNumber(d.eje, false, field + ".eje");
    d.tramo = TramoProxy.Create(d.tramo, field + ".tramo");
    d.calle = CalleProxy.Create(d.calle, field + ".calle");
    d.coordenadas = CoordenadasProxy.Create(d.coordenadas, field + ".coordenadas");
    return new PortalProxy(d);
  }
  private constructor(d: any) {
    this.idPortal = d.idPortal;
    this.numero = d.numero;
    this.bis = d.bis;
    this.tipoPortal = d.tipoPortal;
    this.idEdificio = d.idEdificio;
    this.idBloque = d.idBloque;
    this.eje = d.eje;
    this.tramo = d.tramo;
    this.calle = d.calle;
    this.coordenadas = d.coordenadas;
  }
}

export class TramoProxy {
  public readonly idTramo: number;
  public readonly codigoTramo: string;
  public readonly codPostal: string;
  public readonly numDesde: number;
  public readonly numHasta: number;
  public readonly tipoNumeracion: string;
  public readonly barrio: BarrioProxy;
  public readonly seccion: SeccionProxy;
  public readonly localidad: LocalidadProxy;
  public static Parse(d: string): TramoProxy {
    return TramoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TramoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idTramo, false, field + ".idTramo");
    checkString(d.codigoTramo, false, field + ".codigoTramo");
    checkString(d.codPostal, false, field + ".codPostal");
    checkNumber(d.numDesde, false, field + ".numDesde");
    checkNumber(d.numHasta, false, field + ".numHasta");
    checkString(d.tipoNumeracion, false, field + ".tipoNumeracion");
    d.barrio = BarrioProxy.Create(d.barrio, field + ".barrio");
    d.seccion = SeccionProxy.Create(d.seccion, field + ".seccion");
    d.localidad = LocalidadProxy.Create(d.localidad, field + ".localidad");
    return new TramoProxy(d);
  }
  private constructor(d: any) {
    this.idTramo = d.idTramo;
    this.codigoTramo = d.codigoTramo;
    this.codPostal = d.codPostal;
    this.numDesde = d.numDesde;
    this.numHasta = d.numHasta;
    this.tipoNumeracion = d.tipoNumeracion;
    this.barrio = d.barrio;
    this.seccion = d.seccion;
    this.localidad = d.localidad;
  }
}

export class BarrioProxy {
  public readonly idBarrio: number;
  public readonly codigoBarrio: string;
  public readonly descripcionOficial: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): BarrioProxy {
    return BarrioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BarrioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idBarrio, false, field + ".idBarrio");
    checkString(d.codigoBarrio, false, field + ".codigoBarrio");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new BarrioProxy(d);
  }
  private constructor(d: any) {
    this.idBarrio = d.idBarrio;
    this.codigoBarrio = d.codigoBarrio;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionEus = d.descripcionEus;
  }
}

export class SeccionProxy {
  public readonly idSeccion: number;
  public readonly codigoSeccion: string;
  public readonly distrito: DistritoProxy;
  public static Parse(d: string): SeccionProxy {
    return SeccionProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SeccionProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idSeccion, false, field + ".idSeccion");
    checkString(d.codigoSeccion, false, field + ".codigoSeccion");
    d.distrito = DistritoProxy.Create(d.distrito, field + ".distrito");
    return new SeccionProxy(d);
  }
  private constructor(d: any) {
    this.idSeccion = d.idSeccion;
    this.codigoSeccion = d.codigoSeccion;
    this.distrito = d.distrito;
  }
}

export class DistritoProxy {
  public readonly idDistrito: number;
  public readonly codigoDistrito: string;
  public static Parse(d: string): DistritoProxy {
    return DistritoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DistritoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idDistrito, false, field + ".idDistrito");
    checkString(d.codigoDistrito, false, field + ".codigoDistrito");
    return new DistritoProxy(d);
  }
  private constructor(d: any) {
    this.idDistrito = d.idDistrito;
    this.codigoDistrito = d.codigoDistrito;
  }
}

export class LocalidadProxy {
  public readonly idLocalidad: number;
  public readonly codigoLocalidad: string;
  public readonly descripcionOficial: string;
  public readonly municipio: MunicipioProxy;
  public static Parse(d: string): LocalidadProxy {
    return LocalidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LocalidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idLocalidad, false, field + ".idLocalidad");
    checkString(d.codigoLocalidad, false, field + ".codigoLocalidad");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    d.municipio = MunicipioProxy.Create(d.municipio, field + ".municipio");
    return new LocalidadProxy(d);
  }
  private constructor(d: any) {
    this.idLocalidad = d.idLocalidad;
    this.codigoLocalidad = d.codigoLocalidad;
    this.descripcionOficial = d.descripcionOficial;
    this.municipio = d.municipio;
  }
}

export class MunicipioProxy {
  public readonly codMunicipio: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly comarca: ComarcaProxy;
  public readonly provincia: ProvinciaProxy;
  public static Parse(d: string): MunicipioProxy {
    return MunicipioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MunicipioProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codMunicipio, false, field + ".codMunicipio");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    d.comarca = ComarcaProxy.Create(d.comarca, field + ".comarca");
    d.provincia = ProvinciaProxy.Create(d.provincia, field + ".provincia");
    return new MunicipioProxy(d);
  }
  private constructor(d: any) {
    this.codMunicipio = d.codMunicipio;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.comarca = d.comarca;
    this.provincia = d.provincia;
  }
}

export class ComarcaProxy {
  public readonly codigoComarca: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): ComarcaProxy {
    return ComarcaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ComarcaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codigoComarca, false, field + ".codigoComarca");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new ComarcaProxy(d);
  }
  private constructor(d: any) {
    this.codigoComarca = d.codigoComarca;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class ProvinciaProxy {
  public readonly codProvincia: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly baja: boolean;
  public readonly autonomia: AutonomiaProxy;
  public static Parse(d: string): ProvinciaProxy {
    return ProvinciaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProvinciaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codProvincia, false, field + ".codProvincia");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.baja, false, field + ".baja");
    d.autonomia = AutonomiaProxy.Create(d.autonomia, field + ".autonomia");
    return new ProvinciaProxy(d);
  }
  private constructor(d: any) {
    this.codProvincia = d.codProvincia;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.baja = d.baja;
    this.autonomia = d.autonomia;
  }
}

export class AutonomiaProxy {
  public readonly codAutonomia: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly baja: boolean;
  public static Parse(d: string): AutonomiaProxy {
    return AutonomiaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AutonomiaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codAutonomia, false, field + ".codAutonomia");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkBoolean(d.baja, false, field + ".baja");
    return new AutonomiaProxy(d);
  }
  private constructor(d: any) {
    this.codAutonomia = d.codAutonomia;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.baja = d.baja;
  }
}

export class CalleProxy {
  public readonly idCalle: number;
  public readonly codigoCalle: number;
  public readonly descripcionOficial: string;
  public readonly tipoVia: TipoViaProxy;
  public static Parse(d: string): CalleProxy {
    return CalleProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CalleProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.idCalle, false, field + ".idCalle");
    checkNumber(d.codigoCalle, false, field + ".codigoCalle");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    d.tipoVia = TipoViaProxy.Create(d.tipoVia, field + ".tipoVia");
    return new CalleProxy(d);
  }
  private constructor(d: any) {
    this.idCalle = d.idCalle;
    this.codigoCalle = d.codigoCalle;
    this.descripcionOficial = d.descripcionOficial;
    this.tipoVia = d.tipoVia;
  }
}

export class TipoViaProxy {
  public readonly idTipoVia: string;
  public readonly descripcion: string;
  public readonly descripcionReducidaEus: string;
  public readonly descripcionAbrevEus: string;
  public readonly descripcionReducidaCas: string;
  public readonly descripcionAbrevCas: string;
  public static Parse(d: string): TipoViaProxy {
    return TipoViaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TipoViaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.idTipoVia, false, field + ".idTipoVia");
    checkString(d.descripcion, false, field + ".descripcion");
    checkString(d.descripcionReducidaEus, false, field + ".descripcionReducidaEus");
    checkString(d.descripcionAbrevEus, false, field + ".descripcionAbrevEus");
    checkString(d.descripcionReducidaCas, false, field + ".descripcionReducidaCas");
    checkString(d.descripcionAbrevCas, false, field + ".descripcionAbrevCas");
    return new TipoViaProxy(d);
  }
  private constructor(d: any) {
    this.idTipoVia = d.idTipoVia;
    this.descripcion = d.descripcion;
    this.descripcionReducidaEus = d.descripcionReducidaEus;
    this.descripcionAbrevEus = d.descripcionAbrevEus;
    this.descripcionReducidaCas = d.descripcionReducidaCas;
    this.descripcionAbrevCas = d.descripcionAbrevCas;
  }
}

export class CoordenadasProxy {
  public readonly xEd50: number;
  public readonly xEtrs89: number;
  public readonly yEd50: number;
  public readonly yEtrs89: number;
  public static Parse(d: string): CoordenadasProxy {
    return CoordenadasProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CoordenadasProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.xEd50, false, field + ".xEd50");
    checkNumber(d.xEtrs89, false, field + ".xEtrs89");
    checkNumber(d.yEd50, false, field + ".yEd50");
    checkNumber(d.yEtrs89, false, field + ".yEtrs89");
    return new CoordenadasProxy(d);
  }
  private constructor(d: any) {
    this.xEd50 = d.xEd50;
    this.xEtrs89 = d.xEtrs89;
    this.yEd50 = d.yEd50;
    this.yEtrs89 = d.yEtrs89;
  }
}

export class PaisProxy {
  public readonly idPais: string;
  public readonly descripcionOficial: string;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public static Parse(d: string): PaisProxy {
    return PaisProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PaisProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.idPais, false, field + ".idPais");
    checkString(d.descripcionOficial, false, field + ".descripcionOficial");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    return new PaisProxy(d);
  }
  private constructor(d: any) {
    this.idPais = d.idPais;
    this.descripcionOficial = d.descripcionOficial;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
  }
}

export class CuposPacienteProxy {
  public readonly centro: CentroProxy;
  public readonly uap: UapProxy;
  public readonly cupoMedico: CupoMedicoProxy;
  public static Parse(d: string): CuposPacienteProxy {
    return CuposPacienteProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CuposPacienteProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.centro = CentroProxy.Create(d.centro, field + ".centro");
    d.uap = UapProxy.Create(d.uap, field + ".uap");
    d.cupoMedico = CupoMedicoProxy.Create(d.cupoMedico, field + ".cupoMedico");
    return new CuposPacienteProxy(d);
  }
  private constructor(d: any) {
    this.centro = d.centro;
    this.uap = d.uap;
    this.cupoMedico = d.cupoMedico;
  }
}

export class CentroProxy {
  public readonly codCentro: number;
  public readonly descripcionCas: string;
  public readonly descripcionEus: string;
  public readonly descAbrev: string;
  public static Parse(d: string): CentroProxy {
    return CentroProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CentroProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codCentro, false, field + ".codCentro");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new CentroProxy(d);
  }
  private constructor(d: any) {
    this.codCentro = d.codCentro;
    this.descripcionCas = d.descripcionCas;
    this.descripcionEus = d.descripcionEus;
    this.descAbrev = d.descAbrev;
  }
}

export class UapProxy {
  public readonly codUap: string;
  public readonly descripcionCas: string;
  public readonly codOsi: string;
  public readonly descAbrev: string;
  public static Parse(d: string): UapProxy {
    return UapProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UapProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codUap, false, field + ".codUap");
    checkString(d.descripcionCas, false, field + ".descripcionCas");
    checkString(d.codOsi, false, field + ".codOsi");
    checkString(d.descAbrev, false, field + ".descAbrev");
    return new UapProxy(d);
  }
  private constructor(d: any) {
    this.codUap = d.codUap;
    this.descripcionCas = d.descripcionCas;
    this.codOsi = d.codOsi;
    this.descAbrev = d.descAbrev;
  }
}

export class CupoMedicoProxy {
  public readonly codCupo: string;
  public readonly tipoCupo: number;
  public readonly profesional: ProfesionalProxy;
  public readonly especialidad: EspecialidadProxy;
  public static Parse(d: string): CupoMedicoProxy {
    return CupoMedicoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CupoMedicoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.codCupo, false, field + ".codCupo");
    checkNumber(d.tipoCupo, false, field + ".tipoCupo");
    d.profesional = ProfesionalProxy.Create(d.profesional, field + ".profesional");
    d.especialidad = EspecialidadProxy.Create(d.especialidad, field + ".especialidad");
    return new CupoMedicoProxy(d);
  }
  private constructor(d: any) {
    this.codCupo = d.codCupo;
    this.tipoCupo = d.tipoCupo;
    this.profesional = d.profesional;
    this.especialidad = d.especialidad;
  }
}

export class ProfesionalProxy {
  public readonly codProf: number;
  public readonly codGizabide: number;
  public readonly dni: string;
  public readonly nombre: string;
  public readonly apellido1: string;
  public readonly apellido2: string;
  public static Parse(d: string): ProfesionalProxy {
    return ProfesionalProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProfesionalProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codProf, false, field + ".codProf");
    checkNumber(d.codGizabide, false, field + ".codGizabide");
    checkString(d.dni, false, field + ".dni");
    checkString(d.nombre, false, field + ".nombre");
    checkString(d.apellido1, false, field + ".apellido1");
    checkString(d.apellido2, false, field + ".apellido2");
    return new ProfesionalProxy(d);
  }
  private constructor(d: any) {
    this.codProf = d.codProf;
    this.codGizabide = d.codGizabide;
    this.dni = d.dni;
    this.nombre = d.nombre;
    this.apellido1 = d.apellido1;
    this.apellido2 = d.apellido2;
  }
}

export class EspecialidadProxy {
  public readonly codSeccion: number;
  public readonly descripcionCast: string;
  public readonly descripcionEus: string;
  public readonly codServicio: number;
  public readonly descripcionServCast: string;
  public readonly descripcionServEus: string;
  public static Parse(d: string): EspecialidadProxy {
    return EspecialidadProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EspecialidadProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.codSeccion, false, field + ".codSeccion");
    checkString(d.descripcionCast, false, field + ".descripcionCast");
    checkString(d.descripcionEus, false, field + ".descripcionEus");
    checkNumber(d.codServicio, false, field + ".codServicio");
    checkString(d.descripcionServCast, false, field + ".descripcionServCast");
    checkString(d.descripcionServEus, false, field + ".descripcionServEus");
    return new EspecialidadProxy(d);
  }
  private constructor(d: any) {
    this.codSeccion = d.codSeccion;
    this.descripcionCast = d.descripcionCast;
    this.descripcionEus = d.descripcionEus;
    this.codServicio = d.codServicio;
    this.descripcionServCast = d.descripcionServCast;
    this.descripcionServEus = d.descripcionServEus;
  }
}

export class Prescriptions1Proxy {
  public readonly xml: XmlProxy;
  public readonly S:Envelope: S:Envelope1Proxy;
  public static Parse(d: string): Prescriptions1Proxy {
    return Prescriptions1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Prescriptions1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.xml = XmlProxy.Create(d.xml, field + ".xml");
    d.S:Envelope = S:Envelope1Proxy.Create(d.S:Envelope, field + ".S:Envelope");
    return new Prescriptions1Proxy(d);
  }
  private constructor(d: any) {
    this.xml = d.xml;
    this.S:Envelope = d.S:Envelope;
  }
}

export class XmlProxy {
  public readonly @version: number;
  public readonly @encoding: string;
  public static Parse(d: string): XmlProxy {
    return XmlProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): XmlProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@version, false, field + ".@version");
    checkString(d.@encoding, false, field + ".@encoding");
    return new XmlProxy(d);
  }
  private constructor(d: any) {
    this.@version = d.@version;
    this.@encoding = d.@encoding;
  }
}

export class S:Envelope1Proxy {
  public readonly @xmlns:S: string;
  public readonly S:Body: S:Body1Proxy;
  public static Parse(d: string): S:Envelope1Proxy {
    return S:Envelope1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): S:Envelope1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:S, false, field + ".@xmlns:S");
    d.S:Body = S:Body1Proxy.Create(d.S:Body, field + ".S:Body");
    return new S:Envelope1Proxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:S = d.@xmlns:S;
    this.S:Body = d.S:Body;
  }
}

export class S:Body1Proxy {
  public readonly ns2:prescripcion_v6: Ns2:prescripcionV61Proxy;
  public static Parse(d: string): S:Body1Proxy {
    return S:Body1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): S:Body1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.ns2:prescripcion_v6 = Ns2:prescripcionV61Proxy.Create(d.ns2:prescripcion_v6, field + ".ns2:prescripcion_v6");
    return new S:Body1Proxy(d);
  }
  private constructor(d: any) {
    this.ns2:prescripcion_v6 = d.ns2:prescripcion_v6;
  }
}

export class Ns2:prescripcionV61Proxy {
  public readonly @xmlns:ns2: string;
  public readonly ns2:prescripciones_v6: Ns2:prescripcionesV6Entity1Proxy[] | null;
  public static Parse(d: string): Ns2:prescripcionV61Proxy {
    return Ns2:prescripcionV61Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Ns2:prescripcionV61Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:ns2, false, field + ".@xmlns:ns2");
    checkArray(d.ns2:prescripciones_v6, field + ".ns2:prescripciones_v6");
    if (d.ns2:prescripciones_v6) {
      for (let i = 0; i < d.ns2:prescripciones_v6.length; i++) {
        d.ns2:prescripciones_v6[i] = Ns2:prescripcionesV6Entity1Proxy.Create(d.ns2:prescripciones_v6[i], field + ".ns2:prescripciones_v6" + "[" + i + "]");
      }
    }
    if (d.ns2:prescripciones_v6 === undefined) {
      d.ns2:prescripciones_v6 = null;
    }
    return new Ns2:prescripcionV61Proxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:ns2 = d.@xmlns:ns2;
    this.ns2:prescripciones_v6 = d.ns2:prescripciones_v6;
  }
}

export class Ns2:prescripcionesV6Entity1Proxy {
  public readonly ns2:idPrescripcion: number;
  public readonly ns2:estado: string;
  public readonly ns2:tipo: string;
  public readonly ns2:nombreProducto: string;
  public readonly ns2:listaPrincipiosActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:listaPrincipiosActivosIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:codVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:nombreVia: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:nombreViaIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitual: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:fechaInicio: string;
  public readonly ns2:fechaRevision: string | null;
  public readonly ns2:fechaProxRecogida: string;
  public readonly ns2:tipoAtencion: string;
  public readonly ns2:seguimientoAE: string;
  public readonly ns2:prescriptorIdUnico: string;
  public readonly ns2:prescriptorApellido1: string;
  public readonly ns2:prescriptorApellido2: string;
  public readonly ns2:prescriptorNombre: string;
  public readonly ns2:creditoAdicional: boolean;
  public readonly ns2:estupefaciente: boolean;
  public readonly ns2:tipoElementoPrescrito: string;
  public readonly ns2:codigoPrescrito: number;
  public readonly ns2:pautaHabitualPacES: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitualPacEU: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:pautaHabitualPacIng: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:codATC: string;
  public readonly ns2:desATC: string;
  public readonly ns2:codForma: string;
  public readonly ns2:descripcionForma: string;
  public readonly ns2:descripcionFormaIng: string;
  public readonly ns2:listaCodPActivos: string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly ns2:dosisValor: number | null;
  public readonly ns2:dosisUnidad: string | null;
  public readonly ns2:estadoVisado: string | null;
  public readonly ns2:fechaFinalizacion: string | null;
  public static Parse(d: string): Ns2:prescripcionesV6Entity1Proxy {
    return Ns2:prescripcionesV6Entity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Ns2:prescripcionesV6Entity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.ns2:idPrescripcion, false, field + ".ns2:idPrescripcion");
    checkString(d.ns2:estado, false, field + ".ns2:estado");
    checkString(d.ns2:tipo, false, field + ".ns2:tipo");
    checkString(d.ns2:nombreProducto, false, field + ".ns2:nombreProducto");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaPrincipiosActivos, false, field + ".ns2:listaPrincipiosActivos");
    } catch (e) {
      try {
        d.ns2:listaPrincipiosActivos = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaPrincipiosActivos, field + ".ns2:listaPrincipiosActivos");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaPrincipiosActivosIng, false, field + ".ns2:listaPrincipiosActivosIng");
    } catch (e) {
      try {
        d.ns2:listaPrincipiosActivosIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaPrincipiosActivosIng, field + ".ns2:listaPrincipiosActivosIng");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:codVia, false, field + ".ns2:codVia");
    } catch (e) {
      try {
        d.ns2:codVia = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:codVia, field + ".ns2:codVia");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:nombreVia, false, field + ".ns2:nombreVia");
    } catch (e) {
      try {
        d.ns2:nombreVia = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:nombreVia, field + ".ns2:nombreVia");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:nombreViaIng, false, field + ".ns2:nombreViaIng");
    } catch (e) {
      try {
        d.ns2:nombreViaIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:nombreViaIng, field + ".ns2:nombreViaIng");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitual, false, field + ".ns2:pautaHabitual");
    } catch (e) {
      try {
        d.ns2:pautaHabitual = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitual, field + ".ns2:pautaHabitual");
      } catch (e) {
        throw e;
      }
    }
    checkString(d.ns2:fechaInicio, false, field + ".ns2:fechaInicio");
    checkString(d.ns2:fechaRevision, true, field + ".ns2:fechaRevision");
    if (d.ns2:fechaRevision === undefined) {
      d.ns2:fechaRevision = null;
    }
    checkString(d.ns2:fechaProxRecogida, false, field + ".ns2:fechaProxRecogida");
    checkString(d.ns2:tipoAtencion, false, field + ".ns2:tipoAtencion");
    checkString(d.ns2:seguimientoAE, false, field + ".ns2:seguimientoAE");
    checkString(d.ns2:prescriptorIdUnico, false, field + ".ns2:prescriptorIdUnico");
    checkString(d.ns2:prescriptorApellido1, false, field + ".ns2:prescriptorApellido1");
    checkString(d.ns2:prescriptorApellido2, false, field + ".ns2:prescriptorApellido2");
    checkString(d.ns2:prescriptorNombre, false, field + ".ns2:prescriptorNombre");
    checkBoolean(d.ns2:creditoAdicional, false, field + ".ns2:creditoAdicional");
    checkBoolean(d.ns2:estupefaciente, false, field + ".ns2:estupefaciente");
    checkString(d.ns2:tipoElementoPrescrito, false, field + ".ns2:tipoElementoPrescrito");
    checkNumber(d.ns2:codigoPrescrito, false, field + ".ns2:codigoPrescrito");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacES, false, field + ".ns2:pautaHabitualPacES");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacES = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacES, field + ".ns2:pautaHabitualPacES");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacEU, false, field + ".ns2:pautaHabitualPacEU");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacEU = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacEU, field + ".ns2:pautaHabitualPacEU");
      } catch (e) {
        throw e;
      }
    }
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:pautaHabitualPacIng, false, field + ".ns2:pautaHabitualPacIng");
    } catch (e) {
      try {
        d.ns2:pautaHabitualPacIng = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:pautaHabitualPacIng, field + ".ns2:pautaHabitualPacIng");
      } catch (e) {
        throw e;
      }
    }
    checkString(d.ns2:codATC, false, field + ".ns2:codATC");
    checkString(d.ns2:desATC, false, field + ".ns2:desATC");
    checkString(d.ns2:codForma, false, field + ".ns2:codForma");
    checkString(d.ns2:descripcionForma, false, field + ".ns2:descripcionForma");
    checkString(d.ns2:descripcionFormaIng, false, field + ".ns2:descripcionFormaIng");
    // This will be refactored in the next release.
    try {
      checkString(d.ns2:listaCodPActivos, false, field + ".ns2:listaCodPActivos");
    } catch (e) {
      try {
        d.ns2:listaCodPActivos = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.ns2:listaCodPActivos, field + ".ns2:listaCodPActivos");
      } catch (e) {
        throw e;
      }
    }
    checkNumber(d.ns2:dosisValor, true, field + ".ns2:dosisValor");
    if (d.ns2:dosisValor === undefined) {
      d.ns2:dosisValor = null;
    }
    checkString(d.ns2:dosisUnidad, true, field + ".ns2:dosisUnidad");
    if (d.ns2:dosisUnidad === undefined) {
      d.ns2:dosisUnidad = null;
    }
    checkString(d.ns2:estadoVisado, true, field + ".ns2:estadoVisado");
    if (d.ns2:estadoVisado === undefined) {
      d.ns2:estadoVisado = null;
    }
    checkString(d.ns2:fechaFinalizacion, true, field + ".ns2:fechaFinalizacion");
    if (d.ns2:fechaFinalizacion === undefined) {
      d.ns2:fechaFinalizacion = null;
    }
    return new Ns2:prescripcionesV6Entity1Proxy(d);
  }
  private constructor(d: any) {
    this.ns2:idPrescripcion = d.ns2:idPrescripcion;
    this.ns2:estado = d.ns2:estado;
    this.ns2:tipo = d.ns2:tipo;
    this.ns2:nombreProducto = d.ns2:nombreProducto;
    this.ns2:listaPrincipiosActivos = d.ns2:listaPrincipiosActivos;
    this.ns2:listaPrincipiosActivosIng = d.ns2:listaPrincipiosActivosIng;
    this.ns2:codVia = d.ns2:codVia;
    this.ns2:nombreVia = d.ns2:nombreVia;
    this.ns2:nombreViaIng = d.ns2:nombreViaIng;
    this.ns2:pautaHabitual = d.ns2:pautaHabitual;
    this.ns2:fechaInicio = d.ns2:fechaInicio;
    this.ns2:fechaRevision = d.ns2:fechaRevision;
    this.ns2:fechaProxRecogida = d.ns2:fechaProxRecogida;
    this.ns2:tipoAtencion = d.ns2:tipoAtencion;
    this.ns2:seguimientoAE = d.ns2:seguimientoAE;
    this.ns2:prescriptorIdUnico = d.ns2:prescriptorIdUnico;
    this.ns2:prescriptorApellido1 = d.ns2:prescriptorApellido1;
    this.ns2:prescriptorApellido2 = d.ns2:prescriptorApellido2;
    this.ns2:prescriptorNombre = d.ns2:prescriptorNombre;
    this.ns2:creditoAdicional = d.ns2:creditoAdicional;
    this.ns2:estupefaciente = d.ns2:estupefaciente;
    this.ns2:tipoElementoPrescrito = d.ns2:tipoElementoPrescrito;
    this.ns2:codigoPrescrito = d.ns2:codigoPrescrito;
    this.ns2:pautaHabitualPacES = d.ns2:pautaHabitualPacES;
    this.ns2:pautaHabitualPacEU = d.ns2:pautaHabitualPacEU;
    this.ns2:pautaHabitualPacIng = d.ns2:pautaHabitualPacIng;
    this.ns2:codATC = d.ns2:codATC;
    this.ns2:desATC = d.ns2:desATC;
    this.ns2:codForma = d.ns2:codForma;
    this.ns2:descripcionForma = d.ns2:descripcionForma;
    this.ns2:descripcionFormaIng = d.ns2:descripcionFormaIng;
    this.ns2:listaCodPActivos = d.ns2:listaCodPActivos;
    this.ns2:dosisValor = d.ns2:dosisValor;
    this.ns2:dosisUnidad = d.ns2:dosisUnidad;
    this.ns2:estadoVisado = d.ns2:estadoVisado;
    this.ns2:fechaFinalizacion = d.ns2:fechaFinalizacion;
  }
}

export class LabResultsEntityProxy {
  public readonly FechaResultado: string;
  public readonly IdPrueba: string;
  public readonly Resultado: string;
  public readonly descPrueba: string;
  public static Parse(d: string): LabResultsEntityProxy {
    return LabResultsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LabResultsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.FechaResultado, false, field + ".FechaResultado");
    checkString(d.IdPrueba, false, field + ".IdPrueba");
    checkString(d.Resultado, false, field + ".Resultado");
    checkString(d.descPrueba, false, field + ".descPrueba");
    return new LabResultsEntityProxy(d);
  }
  private constructor(d: any) {
    this.FechaResultado = d.FechaResultado;
    this.IdPrueba = d.IdPrueba;
    this.Resultado = d.Resultado;
    this.descPrueba = d.descPrueba;
  }
}

export class Conditions1Proxy {
  public readonly @xmlns:a: string;
  public readonly @xmlns:i: string;
  public readonly a:CIC: number;
  public readonly a:HCR_CDA: A:HCRCDA1Proxy;
  public readonly a:HCR_PDF: string;
  public static Parse(d: string): Conditions1Proxy {
    return Conditions1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Conditions1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:a, false, field + ".@xmlns:a");
    checkString(d.@xmlns:i, false, field + ".@xmlns:i");
    checkNumber(d.a:CIC, false, field + ".a:CIC");
    d.a:HCR_CDA = A:HCRCDA1Proxy.Create(d.a:HCR_CDA, field + ".a:HCR_CDA");
    checkString(d.a:HCR_PDF, false, field + ".a:HCR_PDF");
    return new Conditions1Proxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:a = d.@xmlns:a;
    this.@xmlns:i = d.@xmlns:i;
    this.a:CIC = d.a:CIC;
    this.a:HCR_CDA = d.a:HCR_CDA;
    this.a:HCR_PDF = d.a:HCR_PDF;
  }
}

export class A:HCRCDA1Proxy {
  public readonly ClinicalDocument: ClinicalDocument1Proxy;
  public static Parse(d: string): A:HCRCDA1Proxy {
    return A:HCRCDA1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): A:HCRCDA1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.ClinicalDocument = ClinicalDocument1Proxy.Create(d.ClinicalDocument, field + ".ClinicalDocument");
    return new A:HCRCDA1Proxy(d);
  }
  private constructor(d: any) {
    this.ClinicalDocument = d.ClinicalDocument;
  }
}

export class ClinicalDocument1Proxy {
  public readonly @xmlns:xsi: string;
  public readonly _at_xsi:schemaLocation: string;
  public readonly @xmlns:voc: string;
  public readonly @xmlns: string;
  public readonly typeId: TypeIdProxy;
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly id: IdOrSetIdProxy;
  public readonly code: CodeOrRouteCodeProxy;
  public readonly title: string;
  public readonly effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly confidentialityCode: AdministrativeGenderCodeOrConfidentialityCodeProxy;
  public readonly languageCode: SignatureCodeOrLanguageCodeProxy;
  public readonly setId: IdOrSetIdProxy;
  public readonly versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly recordTarget: RecordTarget1Proxy;
  public readonly author: AuthorProxy;
  public readonly informant: IdOrTextOrCodeOrInformantProxy;
  public readonly custodian: CustodianProxy;
  public readonly legalAuthenticator: LegalAuthenticatorProxy;
  public readonly documentationOf: DocumentationOfProxy;
  public readonly relatedDocument: RelatedDocumentProxy;
  public readonly component: Component1Proxy;
  public static Parse(d: string): ClinicalDocument1Proxy {
    return ClinicalDocument1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ClinicalDocument1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xmlns:xsi, false, field + ".@xmlns:xsi");
    checkString(d._at_xsi:schemaLocation, false, field + "._at_xsi:schemaLocation");
    checkString(d.@xmlns:voc, false, field + ".@xmlns:voc");
    checkString(d.@xmlns, false, field + ".@xmlns");
    d.typeId = TypeIdProxy.Create(d.typeId, field + ".typeId");
    d.templateId = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId, field + ".templateId");
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    checkString(d.title, false, field + ".title");
    d.effectiveTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.effectiveTime, field + ".effectiveTime");
    d.confidentialityCode = AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(d.confidentialityCode, field + ".confidentialityCode");
    d.languageCode = SignatureCodeOrLanguageCodeProxy.Create(d.languageCode, field + ".languageCode");
    d.setId = IdOrSetIdProxy.Create(d.setId, field + ".setId");
    d.versionNumber = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.versionNumber, field + ".versionNumber");
    d.recordTarget = RecordTarget1Proxy.Create(d.recordTarget, field + ".recordTarget");
    d.author = AuthorProxy.Create(d.author, field + ".author");
    d.informant = IdOrTextOrCodeOrInformantProxy.Create(d.informant, field + ".informant");
    d.custodian = CustodianProxy.Create(d.custodian, field + ".custodian");
    d.legalAuthenticator = LegalAuthenticatorProxy.Create(d.legalAuthenticator, field + ".legalAuthenticator");
    d.documentationOf = DocumentationOfProxy.Create(d.documentationOf, field + ".documentationOf");
    d.relatedDocument = RelatedDocumentProxy.Create(d.relatedDocument, field + ".relatedDocument");
    d.component = Component1Proxy.Create(d.component, field + ".component");
    return new ClinicalDocument1Proxy(d);
  }
  private constructor(d: any) {
    this.@xmlns:xsi = d.@xmlns:xsi;
    this._at_xsi:schemaLocation = d._at_xsi:schemaLocation;
    this.@xmlns:voc = d.@xmlns:voc;
    this.@xmlns = d.@xmlns;
    this.typeId = d.typeId;
    this.templateId = d.templateId;
    this.id = d.id;
    this.code = d.code;
    this.title = d.title;
    this.effectiveTime = d.effectiveTime;
    this.confidentialityCode = d.confidentialityCode;
    this.languageCode = d.languageCode;
    this.setId = d.setId;
    this.versionNumber = d.versionNumber;
    this.recordTarget = d.recordTarget;
    this.author = d.author;
    this.informant = d.informant;
    this.custodian = d.custodian;
    this.legalAuthenticator = d.legalAuthenticator;
    this.documentationOf = d.documentationOf;
    this.relatedDocument = d.relatedDocument;
    this.component = d.component;
  }
}

export class TypeIdProxy {
  public readonly @root: string;
  public readonly @extension: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TypeIdProxy {
    return TypeIdProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TypeIdProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    checkString(d.@extension, false, field + ".@extension");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new TypeIdProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
  }
}

export class IdOrTemplateIdOrTemplateIdEntityProxy {
  public readonly @root: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrTemplateIdOrTemplateIdEntityProxy {
    return IdOrTemplateIdOrTemplateIdEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrTemplateIdOrTemplateIdEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrTemplateIdOrTemplateIdEntityProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.#text = d.#text;
  }
}

export class IdOrSetIdProxy {
  public readonly @root: string;
  public readonly @extension: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrSetIdProxy {
    return IdOrSetIdProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrSetIdProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, false, field + ".@root");
    checkNumber(d.@extension, false, field + ".@extension");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrSetIdProxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
  }
}

export class CodeOrRouteCodeProxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): CodeOrRouteCodeProxy {
    return CodeOrRouteCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CodeOrRouteCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, false, field + ".@displayName");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new CodeOrRouteCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class AdministrativeGenderCodeOrConfidentialityCodeProxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): AdministrativeGenderCodeOrConfidentialityCodeProxy {
    return AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AdministrativeGenderCodeOrConfidentialityCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new AdministrativeGenderCodeOrConfidentialityCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.#text = d.#text;
  }
}

export class SignatureCodeOrLanguageCodeProxy {
  public readonly @code: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): SignatureCodeOrLanguageCodeProxy {
    return SignatureCodeOrLanguageCodeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SignatureCodeOrLanguageCodeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, false, field + ".@code");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new SignatureCodeOrLanguageCodeProxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.#text = d.#text;
  }
}

export class RecordTarget1Proxy {
  public readonly patientRole: PatientRole1Proxy;
  public static Parse(d: string): RecordTarget1Proxy {
    return RecordTarget1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RecordTarget1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.patientRole = PatientRole1Proxy.Create(d.patientRole, field + ".patientRole");
    return new RecordTarget1Proxy(d);
  }
  private constructor(d: any) {
    this.patientRole = d.patientRole;
  }
}

export class PatientRole1Proxy {
  public readonly id: IdEntity1Proxy[] | null;
  public readonly addr: Addr1Proxy;
  public readonly telecom: TelecomOrReferenceProxy;
  public readonly patient: Patient1Proxy;
  public readonly providerOrganization: ProviderOrganizationProxy;
  public static Parse(d: string): PatientRole1Proxy {
    return PatientRole1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PatientRole1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.id, field + ".id");
    if (d.id) {
      for (let i = 0; i < d.id.length; i++) {
        d.id[i] = IdEntity1Proxy.Create(d.id[i], field + ".id" + "[" + i + "]");
      }
    }
    if (d.id === undefined) {
      d.id = null;
    }
    d.addr = Addr1Proxy.Create(d.addr, field + ".addr");
    d.telecom = TelecomOrReferenceProxy.Create(d.telecom, field + ".telecom");
    d.patient = Patient1Proxy.Create(d.patient, field + ".patient");
    d.providerOrganization = ProviderOrganizationProxy.Create(d.providerOrganization, field + ".providerOrganization");
    return new PatientRole1Proxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.addr = d.addr;
    this.telecom = d.telecom;
    this.patient = d.patient;
    this.providerOrganization = d.providerOrganization;
  }
}

export class IdEntity1Proxy {
  public readonly @root: string | null;
  public readonly @extension: number | string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @nullFlavor: string | null;
  public static Parse(d: string): IdEntity1Proxy {
    return IdEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@root, true, field + ".@root");
    if (d.@root === undefined) {
      d.@root = null;
    }
    // This will be refactored in the next release.
    try {
      checkNumber(d.@extension, false, field + ".@extension");
    } catch (e) {
      try {
        checkString(d.@extension, false, field + ".@extension");
      } catch (e) {
        throw e;
      }
    }
    if (d.@extension === undefined) {
      d.@extension = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@nullFlavor, true, field + ".@nullFlavor");
    if (d.@nullFlavor === undefined) {
      d.@nullFlavor = null;
    }
    return new IdEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.@root = d.@root;
    this.@extension = d.@extension;
    this.#text = d.#text;
    this.@nullFlavor = d.@nullFlavor;
  }
}

export class Addr1Proxy {
  public readonly @use: string;
  public readonly state: string;
  public readonly city: string;
  public readonly postalCode: number;
  public readonly streetNameType: string;
  public readonly streetName: string;
  public readonly houseNumber: number;
  public readonly additionalLocator: (number | string)[] | null;
  public static Parse(d: string): Addr1Proxy {
    return Addr1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Addr1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@use, false, field + ".@use");
    checkString(d.state, false, field + ".state");
    checkString(d.city, false, field + ".city");
    checkNumber(d.postalCode, false, field + ".postalCode");
    checkString(d.streetNameType, false, field + ".streetNameType");
    checkString(d.streetName, false, field + ".streetName");
    checkNumber(d.houseNumber, false, field + ".houseNumber");
    checkArray(d.additionalLocator, field + ".additionalLocator");
    if (d.additionalLocator) {
      for (let i = 0; i < d.additionalLocator.length; i++) {
        // This will be refactored in the next release.
        try {
          checkNumber(d.additionalLocator[i], false, field + ".additionalLocator" + "[" + i + "]");
        } catch (e) {
          try {
            checkString(d.additionalLocator[i], false, field + ".additionalLocator" + "[" + i + "]");
          } catch (e) {
            throw e;
          }
        }
      }
    }
    if (d.additionalLocator === undefined) {
      d.additionalLocator = null;
    }
    return new Addr1Proxy(d);
  }
  private constructor(d: any) {
    this.@use = d.@use;
    this.state = d.state;
    this.city = d.city;
    this.postalCode = d.postalCode;
    this.streetNameType = d.streetNameType;
    this.streetName = d.streetName;
    this.houseNumber = d.houseNumber;
    this.additionalLocator = d.additionalLocator;
  }
}

export class TelecomOrReferenceProxy {
  public readonly @value: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): TelecomOrReferenceProxy {
    return TelecomOrReferenceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TelecomOrReferenceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new TelecomOrReferenceProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class Patient1Proxy {
  public readonly name: NameProxy;
  public readonly administrativeGenderCode: AdministrativeGenderCodeOrConfidentialityCodeProxy;
  public readonly birthTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): Patient1Proxy {
    return Patient1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Patient1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.name = NameProxy.Create(d.name, field + ".name");
    d.administrativeGenderCode = AdministrativeGenderCodeOrConfidentialityCodeProxy.Create(d.administrativeGenderCode, field + ".administrativeGenderCode");
    d.birthTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.birthTime, field + ".birthTime");
    return new Patient1Proxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
    this.administrativeGenderCode = d.administrativeGenderCode;
    this.birthTime = d.birthTime;
  }
}

export class NameProxy {
  public readonly family: string[] | null;
  public readonly given: string;
  public static Parse(d: string): NameProxy {
    return NameProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): NameProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.family, field + ".family");
    if (d.family) {
      for (let i = 0; i < d.family.length; i++) {
        checkString(d.family[i], false, field + ".family" + "[" + i + "]");
      }
    }
    if (d.family === undefined) {
      d.family = null;
    }
    checkString(d.given, false, field + ".given");
    return new NameProxy(d);
  }
  private constructor(d: any) {
    this.family = d.family;
    this.given = d.given;
  }
}

export class ProviderOrganizationProxy {
  public readonly name: string;
  public static Parse(d: string): ProviderOrganizationProxy {
    return ProviderOrganizationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ProviderOrganizationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.name, false, field + ".name");
    return new ProviderOrganizationProxy(d);
  }
  private constructor(d: any) {
    this.name = d.name;
  }
}

export class AuthorProxy {
  public readonly time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly assignedAuthor: AssignedAuthorProxy;
  public static Parse(d: string): AuthorProxy {
    return AuthorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AuthorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.time = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.time, field + ".time");
    d.assignedAuthor = AssignedAuthorProxy.Create(d.assignedAuthor, field + ".assignedAuthor");
    return new AuthorProxy(d);
  }
  private constructor(d: any) {
    this.time = d.time;
    this.assignedAuthor = d.assignedAuthor;
  }
}

export class AssignedAuthorProxy {
  public readonly id: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly assignedAuthoringDevice: AssignedAuthoringDeviceProxy;
  public static Parse(d: string): AssignedAuthorProxy {
    return AssignedAuthorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedAuthorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.id, field + ".id");
    d.assignedAuthoringDevice = AssignedAuthoringDeviceProxy.Create(d.assignedAuthoringDevice, field + ".assignedAuthoringDevice");
    return new AssignedAuthorProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.assignedAuthoringDevice = d.assignedAuthoringDevice;
  }
}

export class AssignedAuthoringDeviceProxy {
  public readonly code: CodeOrRouteCodeProxy;
  public readonly softwareName: string;
  public static Parse(d: string): AssignedAuthoringDeviceProxy {
    return AssignedAuthoringDeviceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedAuthoringDeviceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    checkString(d.softwareName, false, field + ".softwareName");
    return new AssignedAuthoringDeviceProxy(d);
  }
  private constructor(d: any) {
    this.code = d.code;
    this.softwareName = d.softwareName;
  }
}

export class IdOrTextOrCodeOrInformantProxy {
  public readonly @nullFlavor: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): IdOrTextOrCodeOrInformantProxy {
    return IdOrTextOrCodeOrInformantProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): IdOrTextOrCodeOrInformantProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@nullFlavor, false, field + ".@nullFlavor");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new IdOrTextOrCodeOrInformantProxy(d);
  }
  private constructor(d: any) {
    this.@nullFlavor = d.@nullFlavor;
    this.#text = d.#text;
  }
}

export class CustodianProxy {
  public readonly assignedCustodian: AssignedCustodianProxy;
  public static Parse(d: string): CustodianProxy {
    return CustodianProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CustodianProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.assignedCustodian = AssignedCustodianProxy.Create(d.assignedCustodian, field + ".assignedCustodian");
    return new CustodianProxy(d);
  }
  private constructor(d: any) {
    this.assignedCustodian = d.assignedCustodian;
  }
}

export class AssignedCustodianProxy {
  public readonly @classCode: string;
  public readonly representedCustodianOrganization: RepresentedCustodianOrganizationProxy;
  public static Parse(d: string): AssignedCustodianProxy {
    return AssignedCustodianProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedCustodianProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    d.representedCustodianOrganization = RepresentedCustodianOrganizationProxy.Create(d.representedCustodianOrganization, field + ".representedCustodianOrganization");
    return new AssignedCustodianProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.representedCustodianOrganization = d.representedCustodianOrganization;
  }
}

export class RepresentedCustodianOrganizationProxy {
  public readonly @classCode: string;
  public readonly @determinerCode: string;
  public readonly id: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly name: string;
  public static Parse(d: string): RepresentedCustodianOrganizationProxy {
    return RepresentedCustodianOrganizationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RepresentedCustodianOrganizationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@determinerCode, false, field + ".@determinerCode");
    d.id = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.id, field + ".id");
    checkString(d.name, false, field + ".name");
    return new RepresentedCustodianOrganizationProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@determinerCode = d.@determinerCode;
    this.id = d.id;
    this.name = d.name;
  }
}

export class LegalAuthenticatorProxy {
  public readonly time: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly signatureCode: SignatureCodeOrLanguageCodeProxy;
  public readonly assignedEntity: AssignedEntityProxy;
  public static Parse(d: string): LegalAuthenticatorProxy {
    return LegalAuthenticatorProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LegalAuthenticatorProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.time = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.time, field + ".time");
    d.signatureCode = SignatureCodeOrLanguageCodeProxy.Create(d.signatureCode, field + ".signatureCode");
    d.assignedEntity = AssignedEntityProxy.Create(d.assignedEntity, field + ".assignedEntity");
    return new LegalAuthenticatorProxy(d);
  }
  private constructor(d: any) {
    this.time = d.time;
    this.signatureCode = d.signatureCode;
    this.assignedEntity = d.assignedEntity;
  }
}

export class AssignedEntityProxy {
  public readonly id: IdOrTextOrCodeOrInformantProxy;
  public static Parse(d: string): AssignedEntityProxy {
    return AssignedEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AssignedEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrTextOrCodeOrInformantProxy.Create(d.id, field + ".id");
    return new AssignedEntityProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
  }
}

export class DocumentationOfProxy {
  public readonly serviceEvent: ServiceEventProxy;
  public static Parse(d: string): DocumentationOfProxy {
    return DocumentationOfProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DocumentationOfProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.serviceEvent = ServiceEventProxy.Create(d.serviceEvent, field + ".serviceEvent");
    return new DocumentationOfProxy(d);
  }
  private constructor(d: any) {
    this.serviceEvent = d.serviceEvent;
  }
}

export class ServiceEventProxy {
  public readonly effectiveTime: EffectiveTimeProxy;
  public static Parse(d: string): ServiceEventProxy {
    return ServiceEventProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ServiceEventProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.effectiveTime = EffectiveTimeProxy.Create(d.effectiveTime, field + ".effectiveTime");
    return new ServiceEventProxy(d);
  }
  private constructor(d: any) {
    this.effectiveTime = d.effectiveTime;
  }
}

export class EffectiveTimeProxy {
  public readonly high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): EffectiveTimeProxy {
    return EffectiveTimeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EffectiveTimeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.high = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.high, field + ".high");
    return new EffectiveTimeProxy(d);
  }
  private constructor(d: any) {
    this.high = d.high;
  }
}

export class RelatedDocumentProxy {
  public readonly @typeCode: string;
  public readonly parentDocument: ParentDocumentProxy;
  public static Parse(d: string): RelatedDocumentProxy {
    return RelatedDocumentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): RelatedDocumentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@typeCode, false, field + ".@typeCode");
    d.parentDocument = ParentDocumentProxy.Create(d.parentDocument, field + ".parentDocument");
    return new RelatedDocumentProxy(d);
  }
  private constructor(d: any) {
    this.@typeCode = d.@typeCode;
    this.parentDocument = d.parentDocument;
  }
}

export class ParentDocumentProxy {
  public readonly id: IdOrSetIdProxy;
  public readonly setId: IdOrSetIdProxy;
  public readonly versionNumber: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public static Parse(d: string): ParentDocumentProxy {
    return ParentDocumentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ParentDocumentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d.setId = IdOrSetIdProxy.Create(d.setId, field + ".setId");
    d.versionNumber = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.versionNumber, field + ".versionNumber");
    return new ParentDocumentProxy(d);
  }
  private constructor(d: any) {
    this.id = d.id;
    this.setId = d.setId;
    this.versionNumber = d.versionNumber;
  }
}

export class Component1Proxy {
  public readonly structuredBody: StructuredBody1Proxy;
  public static Parse(d: string): Component1Proxy {
    return Component1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Component1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.structuredBody = StructuredBody1Proxy.Create(d.structuredBody, field + ".structuredBody");
    return new Component1Proxy(d);
  }
  private constructor(d: any) {
    this.structuredBody = d.structuredBody;
  }
}

export class StructuredBody1Proxy {
  public readonly component: ComponentEntity1Proxy[] | null;
  public static Parse(d: string): StructuredBody1Proxy {
    return StructuredBody1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StructuredBody1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.component, field + ".component");
    if (d.component) {
      for (let i = 0; i < d.component.length; i++) {
        d.component[i] = ComponentEntity1Proxy.Create(d.component[i], field + ".component" + "[" + i + "]");
      }
    }
    if (d.component === undefined) {
      d.component = null;
    }
    return new StructuredBody1Proxy(d);
  }
  private constructor(d: any) {
    this.component = d.component;
  }
}

export class ComponentEntity1Proxy {
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy;
  public readonly section: Section1Proxy;
  public static Parse(d: string): ComponentEntity1Proxy {
    return ComponentEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ComponentEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.templateId = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId, field + ".templateId");
    d.section = Section1Proxy.Create(d.section, field + ".section");
    return new ComponentEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.templateId = d.templateId;
    this.section = d.section;
  }
}

export class Section1Proxy {
  public readonly title: string;
  public readonly _text: string | 3Proxy;
  public readonly code: Code2Proxy | null;
  public readonly entry: EntryEntity1Proxy[] | null | 1Proxy;
  public static Parse(d: string): Section1Proxy {
    return Section1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Section1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.title, false, field + ".title");
    // This will be refactored in the next release.
    try {
      checkString(d._text, false, field + "._text");
    } catch (e) {
      try {
        d._text = 3Proxy.Create(d._text, field + "._text");
      } catch (e) {
        throw e;
      }
    }
    d.code = Code2Proxy.Create(d.code, field + ".code");
    if (d.code === undefined) {
      d.code = null;
    }
    // This will be refactored in the next release.
    try {
      checkArray(d.entry, field + ".entry");
      if (d.entry) {
        for (let i = 0; i < d.entry.length; i++) {
          d.entry[i] = EntryEntity1Proxy.Create(d.entry[i], field + ".entry" + "[" + i + "]");
        }
      }
      if (d.entry === undefined) {
        d.entry = null;
      }
    } catch (e) {
      try {
        d.entry = 1Proxy.Create(d.entry, field + ".entry");
      } catch (e) {
        throw e;
      }
    }
    if (d.entry === undefined) {
      d.entry = null;
    }
    return new Section1Proxy(d);
  }
  private constructor(d: any) {
    this.title = d.title;
    this._text = d._text;
    this.code = d.code;
    this.entry = d.entry;
  }
}

export class 3Proxy {
  public readonly list: List2Proxy | null;
  public readonly _table: Table1Proxy | null;
  public static Parse(d: string): 3Proxy {
    return 3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): 3Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.list = List2Proxy.Create(d.list, field + ".list");
    if (d.list === undefined) {
      d.list = null;
    }
    d._table = Table1Proxy.Create(d._table, field + "._table");
    if (d._table === undefined) {
      d._table = null;
    }
    return new 3Proxy(d);
  }
  private constructor(d: any) {
    this.list = d.list;
    this._table = d._table;
  }
}

export class List2Proxy {
  public readonly item: (string | ItemEntityOrItemProxy)[] | null | ItemEntityOrItemProxy;
  public static Parse(d: string): List2Proxy | null {
    return List2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): List2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    // This will be refactored in the next release.
    try {
      checkArray(d.item, field + ".item");
      if (d.item) {
        for (let i = 0; i < d.item.length; i++) {
          // This will be refactored in the next release.
          try {
            checkString(d.item[i], false, field + ".item" + "[" + i + "]");
          } catch (e) {
            try {
              d.item[i] = ItemEntityOrItemProxy.Create(d.item[i], field + ".item" + "[" + i + "]");
            } catch (e) {
              throw e;
            }
          }
        }
      }
      if (d.item === undefined) {
        d.item = null;
      }
    } catch (e) {
      try {
        d.item = ItemEntityOrItemProxy.Create(d.item, field + ".item");
      } catch (e) {
        throw e;
      }
    }
    if (d.item === undefined) {
      d.item = null;
    }
    return new List2Proxy(d);
  }
  private constructor(d: any) {
    this.item = d.item;
  }
}

export class ItemEntityOrItemProxy {
  public readonly @ID: string;
  public readonly #text: string;
  public static Parse(d: string): ItemEntityOrItemProxy {
    return ItemEntityOrItemProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemEntityOrItemProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@ID, false, field + ".@ID");
    checkString(d.#text, false, field + ".#text");
    return new ItemEntityOrItemProxy(d);
  }
  private constructor(d: any) {
    this.@ID = d.@ID;
    this.#text = d.#text;
  }
}

export class Table1Proxy {
  public readonly thead: Thead1Proxy;
  public readonly tbody: Tbody1Proxy;
  public static Parse(d: string): Table1Proxy | null {
    return Table1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Table1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    d.thead = Thead1Proxy.Create(d.thead, field + ".thead");
    d.tbody = Tbody1Proxy.Create(d.tbody, field + ".tbody");
    return new Table1Proxy(d);
  }
  private constructor(d: any) {
    this.thead = d.thead;
    this.tbody = d.tbody;
  }
}

export class Thead1Proxy {
  public readonly tr: TrEntity2Proxy[] | null;
  public static Parse(d: string): Thead1Proxy {
    return Thead1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Thead1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.tr, field + ".tr");
    if (d.tr) {
      for (let i = 0; i < d.tr.length; i++) {
        d.tr[i] = TrEntity2Proxy.Create(d.tr[i], field + ".tr" + "[" + i + "]");
      }
    }
    if (d.tr === undefined) {
      d.tr = null;
    }
    return new Thead1Proxy(d);
  }
  private constructor(d: any) {
    this.tr = d.tr;
  }
}

export class TrEntity2Proxy {
  public readonly th: (string | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy | StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy | string)[] | null;
  public static Parse(d: string): TrEntity2Proxy {
    return TrEntity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TrEntity2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.th, field + ".th");
    if (d.th) {
      for (let i = 0; i < d.th.length; i++) {
        // This will be refactored in the next release.
        try {
          checkString(d.th[i], false, field + ".th" + "[" + i + "]");
        } catch (e) {
          try {
            d.th[i] = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.th[i], field + ".th" + "[" + i + "]");
          } catch (e) {
            try {
              // This will be refactored in the next release.
              try {
                d.th[i] = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.th[i], field + ".th" + "[" + i + "]");
              } catch (e) {
                try {
                  checkString(d.th[i], false, field + ".th" + "[" + i + "]");
                } catch (e) {
                  throw e;
                }
              }
            } catch (e) {
              throw e;
            }
          }
        }
      }
    }
    if (d.th === undefined) {
      d.th = null;
    }
    return new TrEntity2Proxy(d);
  }
  private constructor(d: any) {
    this.th = d.th;
  }
}

export class Tbody1Proxy {
  public readonly tr: TrEntity3Proxy[] | null;
  public static Parse(d: string): Tbody1Proxy {
    return Tbody1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Tbody1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.tr, field + ".tr");
    if (d.tr) {
      for (let i = 0; i < d.tr.length; i++) {
        d.tr[i] = TrEntity3Proxy.Create(d.tr[i], field + ".tr" + "[" + i + "]");
      }
    }
    if (d.tr === undefined) {
      d.tr = null;
    }
    return new Tbody1Proxy(d);
  }
  private constructor(d: any) {
    this.tr = d.tr;
  }
}

export class TrEntity3Proxy {
  public readonly td: (2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string | 2Proxy | string)[] | null;
  public static Parse(d: string): TrEntity3Proxy {
    return TrEntity3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TrEntity3Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.td, field + ".td");
    if (d.td) {
      for (let i = 0; i < d.td.length; i++) {
        // This will be refactored in the next release.
        try {
          d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
        } catch (e) {
          try {
            checkString(d.td[i], false, field + ".td" + "[" + i + "]");
          } catch (e) {
            try {
              // This will be refactored in the next release.
              try {
                d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
              } catch (e) {
                try {
                  checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                } catch (e) {
                  try {
                    // This will be refactored in the next release.
                    try {
                      d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                    } catch (e) {
                      try {
                        checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                      } catch (e) {
                        try {
                          // This will be refactored in the next release.
                          try {
                            d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                          } catch (e) {
                            try {
                              checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                            } catch (e) {
                              try {
                                // This will be refactored in the next release.
                                try {
                                  d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                } catch (e) {
                                  try {
                                    checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                  } catch (e) {
                                    try {
                                      // This will be refactored in the next release.
                                      try {
                                        d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                      } catch (e) {
                                        try {
                                          checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                        } catch (e) {
                                          try {
                                            // This will be refactored in the next release.
                                            try {
                                              d.td[i] = 2Proxy.Create(d.td[i], field + ".td" + "[" + i + "]");
                                            } catch (e) {
                                              try {
                                                checkString(d.td[i], false, field + ".td" + "[" + i + "]");
                                              } catch (e) {
                                                throw e;
                                              }
                                            }
                                          } catch (e) {
                                            throw e;
                                          }
                                        }
                                      }
                                    } catch (e) {
                                      throw e;
                                    }
                                  }
                                }
                              } catch (e) {
                                throw e;
                              }
                            }
                          }
                        } catch (e) {
                          throw e;
                        }
                      }
                    }
                  } catch (e) {
                    throw e;
                  }
                }
              }
            } catch (e) {
              throw e;
            }
          }
        }
      }
    }
    if (d.td === undefined) {
      d.td = null;
    }
    return new TrEntity3Proxy(d);
  }
  private constructor(d: any) {
    this.td = d.td;
  }
}

export class 2Proxy {
  public readonly list: List1Proxy;
  public static Parse(d: string): 2Proxy {
    return 2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): 2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.list = List1Proxy.Create(d.list, field + ".list");
    return new 2Proxy(d);
  }
  private constructor(d: any) {
    this.list = d.list;
  }
}

export class List1Proxy {
  public readonly item: string;
  public static Parse(d: string): List1Proxy {
    return List1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): List1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.item, false, field + ".item");
    return new List1Proxy(d);
  }
  private constructor(d: any) {
    this.item = d.item;
  }
}

export class Code2Proxy {
  public readonly @code: string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string | null;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): Code2Proxy | null {
    return Code2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Code2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@code, false, field + ".@code");
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, true, field + ".@displayName");
    if (d.@displayName === undefined) {
      d.@displayName = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new Code2Proxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
  }
}

export class EntryEntity1Proxy {
  public readonly observation: Observation2Proxy | null;
  public readonly @typeCode: string | null;
  public readonly @contextConductionInd: boolean | null;
  public readonly substanceAdministration: SubstanceAdministration1Proxy | null;
  public static Parse(d: string): EntryEntity1Proxy {
    return EntryEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EntryEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.observation = Observation2Proxy.Create(d.observation, field + ".observation");
    if (d.observation === undefined) {
      d.observation = null;
    }
    checkString(d.@typeCode, true, field + ".@typeCode");
    if (d.@typeCode === undefined) {
      d.@typeCode = null;
    }
    checkBoolean(d.@contextConductionInd, true, field + ".@contextConductionInd");
    if (d.@contextConductionInd === undefined) {
      d.@contextConductionInd = null;
    }
    d.substanceAdministration = SubstanceAdministration1Proxy.Create(d.substanceAdministration, field + ".substanceAdministration");
    if (d.substanceAdministration === undefined) {
      d.substanceAdministration = null;
    }
    return new EntryEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.observation = d.observation;
    this.@typeCode = d.@typeCode;
    this.@contextConductionInd = d.@contextConductionInd;
    this.substanceAdministration = d.substanceAdministration;
  }
}

export class Observation2Proxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly code: CodeOrRouteCodeProxy;
  public readonly effectiveTime: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy;
  public readonly value: Value2Proxy;
  public static Parse(d: string): Observation2Proxy | null {
    return Observation2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Observation2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    d.effectiveTime = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantityProxy.Create(d.effectiveTime, field + ".effectiveTime");
    d.value = Value2Proxy.Create(d.value, field + ".value");
    return new Observation2Proxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.code = d.code;
    this.effectiveTime = d.effectiveTime;
    this.value = d.value;
  }
}

export class Value2Proxy {
  public readonly @xsi:type: string;
  public readonly @code: number | string;
  public readonly @codeSystem: string;
  public readonly @codeSystemName: string;
  public readonly @displayName: string;
  public readonly originalText: OriginalTextProxy;
  public static Parse(d: string): Value2Proxy {
    return Value2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Value2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    // This will be refactored in the next release.
    try {
      checkNumber(d.@code, false, field + ".@code");
    } catch (e) {
      try {
        checkString(d.@code, false, field + ".@code");
      } catch (e) {
        throw e;
      }
    }
    if (d.@code === undefined) {
      d.@code = null;
    }
    checkString(d.@codeSystem, false, field + ".@codeSystem");
    checkString(d.@codeSystemName, false, field + ".@codeSystemName");
    checkString(d.@displayName, false, field + ".@displayName");
    d.originalText = OriginalTextProxy.Create(d.originalText, field + ".originalText");
    return new Value2Proxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.originalText = d.originalText;
  }
}

export class OriginalTextProxy {
  public readonly reference: TelecomOrReferenceProxy;
  public static Parse(d: string): OriginalTextProxy {
    return OriginalTextProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): OriginalTextProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.reference = TelecomOrReferenceProxy.Create(d.reference, field + ".reference");
    return new OriginalTextProxy(d);
  }
  private constructor(d: any) {
    this.reference = d.reference;
  }
}

export class SubstanceAdministration1Proxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly templateId: IdOrTemplateIdOrTemplateIdEntityProxy[] | null;
  public readonly id: IdOrSetIdProxy;
  public readonly _text: IdOrTextOrCodeOrInformantProxy;
  public readonly effectiveTime: EffectiveTimeEntityProxy[] | null;
  public readonly routeCode: CodeOrRouteCodeProxy;
  public readonly doseQuantity: DoseQuantityProxy;
  public readonly consumable: ConsumableProxy;
  public static Parse(d: string): SubstanceAdministration1Proxy | null {
    return SubstanceAdministration1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SubstanceAdministration1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    checkArray(d.templateId, field + ".templateId");
    if (d.templateId) {
      for (let i = 0; i < d.templateId.length; i++) {
        d.templateId[i] = IdOrTemplateIdOrTemplateIdEntityProxy.Create(d.templateId[i], field + ".templateId" + "[" + i + "]");
      }
    }
    if (d.templateId === undefined) {
      d.templateId = null;
    }
    d.id = IdOrSetIdProxy.Create(d.id, field + ".id");
    d._text = IdOrTextOrCodeOrInformantProxy.Create(d._text, field + "._text");
    checkArray(d.effectiveTime, field + ".effectiveTime");
    if (d.effectiveTime) {
      for (let i = 0; i < d.effectiveTime.length; i++) {
        d.effectiveTime[i] = EffectiveTimeEntityProxy.Create(d.effectiveTime[i], field + ".effectiveTime" + "[" + i + "]");
      }
    }
    if (d.effectiveTime === undefined) {
      d.effectiveTime = null;
    }
    d.routeCode = CodeOrRouteCodeProxy.Create(d.routeCode, field + ".routeCode");
    d.doseQuantity = DoseQuantityProxy.Create(d.doseQuantity, field + ".doseQuantity");
    d.consumable = ConsumableProxy.Create(d.consumable, field + ".consumable");
    return new SubstanceAdministration1Proxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.templateId = d.templateId;
    this.id = d.id;
    this._text = d._text;
    this.effectiveTime = d.effectiveTime;
    this.routeCode = d.routeCode;
    this.doseQuantity = d.doseQuantity;
    this.consumable = d.consumable;
  }
}

export class EffectiveTimeEntityProxy {
  public readonly @xsi:type: string;
  public readonly low: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null;
  public readonly high: BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null;
  public readonly _at_operator: string | null;
  public readonly period: PeriodProxy | null;
  public static Parse(d: string): EffectiveTimeEntityProxy {
    return EffectiveTimeEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): EffectiveTimeEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    d.low = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy.Create(d.low, field + ".low");
    if (d.low === undefined) {
      d.low = null;
    }
    d.high = BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy.Create(d.high, field + ".high");
    if (d.high === undefined) {
      d.high = null;
    }
    checkString(d._at_operator, true, field + "._at_operator");
    if (d._at_operator === undefined) {
      d._at_operator = null;
    }
    d.period = PeriodProxy.Create(d.period, field + ".period");
    if (d.period === undefined) {
      d.period = null;
    }
    return new EffectiveTimeEntityProxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.low = d.low;
    this.high = d.high;
    this._at_operator = d._at_operator;
    this.period = d.period;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity1Proxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null {
    return BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new BirthTimeOrTimeOrHighOrVersionNumberOrEffectiveTimeOrLowOrDoseQuantity2Proxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
  }
}

export class PeriodProxy {
  public readonly @unit: string;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public static Parse(d: string): PeriodProxy | null {
    return PeriodProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PeriodProxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkString(d.@unit, false, field + ".@unit");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    return new PeriodProxy(d);
  }
  private constructor(d: any) {
    this.@unit = d.@unit;
    this.#text = d.#text;
  }
}

export class DoseQuantityProxy {
  public readonly @value: number;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @unit: string | null;
  public static Parse(d: string): DoseQuantityProxy {
    return DoseQuantityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): DoseQuantityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.@value, false, field + ".@value");
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@unit, true, field + ".@unit");
    if (d.@unit === undefined) {
      d.@unit = null;
    }
    return new DoseQuantityProxy(d);
  }
  private constructor(d: any) {
    this.@value = d.@value;
    this.#text = d.#text;
    this.@unit = d.@unit;
  }
}

export class ConsumableProxy {
  public readonly manufacturedProduct: ManufacturedProductProxy;
  public static Parse(d: string): ConsumableProxy {
    return ConsumableProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ConsumableProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.manufacturedProduct = ManufacturedProductProxy.Create(d.manufacturedProduct, field + ".manufacturedProduct");
    return new ConsumableProxy(d);
  }
  private constructor(d: any) {
    this.manufacturedProduct = d.manufacturedProduct;
  }
}

export class ManufacturedProductProxy {
  public readonly @classCode: string;
  public readonly manufacturedMaterial: ManufacturedMaterialProxy;
  public static Parse(d: string): ManufacturedProductProxy {
    return ManufacturedProductProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ManufacturedProductProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    d.manufacturedMaterial = ManufacturedMaterialProxy.Create(d.manufacturedMaterial, field + ".manufacturedMaterial");
    return new ManufacturedProductProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.manufacturedMaterial = d.manufacturedMaterial;
  }
}

export class ManufacturedMaterialProxy {
  public readonly @classCode: string;
  public readonly @determinerCode: string;
  public readonly code: CodeOrRouteCodeProxy;
  public static Parse(d: string): ManufacturedMaterialProxy {
    return ManufacturedMaterialProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ManufacturedMaterialProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@determinerCode, false, field + ".@determinerCode");
    d.code = CodeOrRouteCodeProxy.Create(d.code, field + ".code");
    return new ManufacturedMaterialProxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@determinerCode = d.@determinerCode;
    this.code = d.code;
  }
}

export class 1Proxy {
  public readonly observation: Observation1Proxy;
  public static Parse(d: string): 1Proxy {
    return 1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): 1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.observation = Observation1Proxy.Create(d.observation, field + ".observation");
    return new 1Proxy(d);
  }
  private constructor(d: any) {
    this.observation = d.observation;
  }
}

export class Observation1Proxy {
  public readonly @classCode: string;
  public readonly @moodCode: string;
  public readonly code: Code1Proxy;
  public readonly value: Value1Proxy;
  public static Parse(d: string): Observation1Proxy {
    return Observation1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Observation1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@classCode, false, field + ".@classCode");
    checkString(d.@moodCode, false, field + ".@moodCode");
    d.code = Code1Proxy.Create(d.code, field + ".code");
    d.value = Value1Proxy.Create(d.value, field + ".value");
    return new Observation1Proxy(d);
  }
  private constructor(d: any) {
    this.@classCode = d.@classCode;
    this.@moodCode = d.@moodCode;
    this.code = d.code;
    this.value = d.value;
  }
}

export class Code1Proxy {
  public readonly @code: string | null;
  public readonly @codeSystem: string | null;
  public readonly @codeSystemName: string | null;
  public readonly @displayName: string | null;
  public readonly #text: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy;
  public readonly @nullFlavor: string | null;
  public static Parse(d: string): Code1Proxy {
    return Code1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Code1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@code, true, field + ".@code");
    if (d.@code === undefined) {
      d.@code = null;
    }
    checkString(d.@codeSystem, true, field + ".@codeSystem");
    if (d.@codeSystem === undefined) {
      d.@codeSystem = null;
    }
    checkString(d.@codeSystemName, true, field + ".@codeSystemName");
    if (d.@codeSystemName === undefined) {
      d.@codeSystemName = null;
    }
    checkString(d.@displayName, true, field + ".@displayName");
    if (d.@displayName === undefined) {
      d.@displayName = null;
    }
    d.#text = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z talProxy.Create(d.#text, field + ".#text");
    checkString(d.@nullFlavor, true, field + ".@nullFlavor");
    if (d.@nullFlavor === undefined) {
      d.@nullFlavor = null;
    }
    return new Code1Proxy(d);
  }
  private constructor(d: any) {
    this.@code = d.@code;
    this.@codeSystem = d.@codeSystem;
    this.@codeSystemName = d.@codeSystemName;
    this.@displayName = d.@displayName;
    this.#text = d.#text;
    this.@nullFlavor = d.@nullFlavor;
  }
}

export class Value1Proxy {
  public readonly @xsi:type: string;
  public readonly @displayName: string;
  public readonly originalText: OriginalTextProxy;
  public static Parse(d: string): Value1Proxy {
    return Value1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Value1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.@xsi:type, false, field + ".@xsi:type");
    checkString(d.@displayName, false, field + ".@displayName");
    d.originalText = OriginalTextProxy.Create(d.originalText, field + ".originalText");
    return new Value1Proxy(d);
  }
  private constructor(d: any) {
    this.@xsi:type = d.@xsi:type;
    this.@displayName = d.@displayName;
    this.originalText = d.originalText;
  }
}

export class ObservationsProxy {
  public readonly ListaRICs: ListaRICsEntityProxy[] | null;
  public readonly NumPagina: number;
  public readonly Status: number;
  public readonly TotalResultado: number;
  public static Parse(d: string): ObservationsProxy {
    return ObservationsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ObservationsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.ListaRICs, field + ".ListaRICs");
    if (d.ListaRICs) {
      for (let i = 0; i < d.ListaRICs.length; i++) {
        d.ListaRICs[i] = ListaRICsEntityProxy.Create(d.ListaRICs[i], field + ".ListaRICs" + "[" + i + "]");
      }
    }
    if (d.ListaRICs === undefined) {
      d.ListaRICs = null;
    }
    checkNumber(d.NumPagina, false, field + ".NumPagina");
    checkNumber(d.Status, false, field + ".Status");
    checkNumber(d.TotalResultado, false, field + ".TotalResultado");
    return new ObservationsProxy(d);
  }
  private constructor(d: any) {
    this.ListaRICs = d.ListaRICs;
    this.NumPagina = d.NumPagina;
    this.Status = d.Status;
    this.TotalResultado = d.TotalResultado;
  }
}

export class ListaRICsEntityProxy {
  public readonly IdRIC: number;
  public readonly ListaRICValor: ListaRICValorEntityProxy[] | null;
  public static Parse(d: string): ListaRICsEntityProxy {
    return ListaRICsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaRICsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.IdRIC, false, field + ".IdRIC");
    checkArray(d.ListaRICValor, field + ".ListaRICValor");
    if (d.ListaRICValor) {
      for (let i = 0; i < d.ListaRICValor.length; i++) {
        d.ListaRICValor[i] = ListaRICValorEntityProxy.Create(d.ListaRICValor[i], field + ".ListaRICValor" + "[" + i + "]");
      }
    }
    if (d.ListaRICValor === undefined) {
      d.ListaRICValor = null;
    }
    return new ListaRICsEntityProxy(d);
  }
  private constructor(d: any) {
    this.IdRIC = d.IdRIC;
    this.ListaRICValor = d.ListaRICValor;
  }
}

export class ListaRICValorEntityProxy {
  public readonly ElementoCatalogo: number;
  public readonly FechaMedicion: string;
  public readonly FechaRegistro: string;
  public readonly IdIdioma: number;
  public readonly IdProcedencia: number;
  public readonly ProfesionalRegistro: string;
  public readonly PuntuacionTotal: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null;
  public readonly Tipo: number;
  public readonly TipoDato: number;
  public readonly UnidadMedida: string;
  public readonly Valor: string;
  public readonly PuntuacionTo2023-12-04T13:32:27.087742367Z tal: StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null;
  public static Parse(d: string): ListaRICValorEntityProxy {
    return ListaRICValorEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ListaRICValorEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.ElementoCatalogo, false, field + ".ElementoCatalogo");
    checkString(d.FechaMedicion, false, field + ".FechaMedicion");
    checkString(d.FechaRegistro, false, field + ".FechaRegistro");
    checkNumber(d.IdIdioma, false, field + ".IdIdioma");
    checkNumber(d.IdProcedencia, false, field + ".IdProcedencia");
    checkString(d.ProfesionalRegistro, false, field + ".ProfesionalRegistro");
    d.PuntuacionTotal = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy.Create(d.PuntuacionTotal, field + ".PuntuacionTotal");
    if (d.PuntuacionTotal === undefined) {
      d.PuntuacionTotal = null;
    }
    checkNumber(d.Tipo, false, field + ".Tipo");
    checkNumber(d.TipoDato, false, field + ".TipoDato");
    checkString(d.UnidadMedida, false, field + ".UnidadMedida");
    checkString(d.Valor, false, field + ".Valor");
    d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy.Create(d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal, field + ".PuntuacionTo2023-12-04T13:32:27.087742367Z tal");
    if (d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal === undefined) {
      d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = null;
    }
    return new ListaRICValorEntityProxy(d);
  }
  private constructor(d: any) {
    this.ElementoCatalogo = d.ElementoCatalogo;
    this.FechaMedicion = d.FechaMedicion;
    this.FechaRegistro = d.FechaRegistro;
    this.IdIdioma = d.IdIdioma;
    this.IdProcedencia = d.IdProcedencia;
    this.ProfesionalRegistro = d.ProfesionalRegistro;
    this.PuntuacionTotal = d.PuntuacionTotal;
    this.Tipo = d.Tipo;
    this.TipoDato = d.TipoDato;
    this.UnidadMedida = d.UnidadMedida;
    this.Valor = d.Valor;
    this.PuntuacionTo2023-12-04T13:32:27.087742367Z tal = d.PuntuacionTo2023-12-04T13:32:27.087742367Z tal;
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal1Proxy(d);
  }
  private constructor(d: any) {
  }
}

export class StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy {
  public static Parse(d: string): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null {
    return StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    return new StrObservacionesOrIndEnvioSMSOrNs2:listaPrincipiosActivosOrNs2:listaPrincipiosActivosIngOrNs2:codViaOrNs2:nombreViaOrNs2:nombreViaIngOrNs2:listaCodPActivosOrNs2:pautaHabitualOrNs2:pautaHabitualPacESOrNs2:pautaHabitualPacEUOrNs2:pautaHabitualPacIngOr#textOrPuntuacionTotalOrPuntuacionTo2023-12-04T13:32:27.087742367Z tal2Proxy(d);
  }
  private constructor(d: any) {
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
