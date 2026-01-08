import { CertidaoType } from './types';

export const API_URL = "https://script.google.com/macros/s/AKfycbzgIvxeBmxO55_LFwtWPqpPEcG9AuqJqVraqfpLwjinZCUtm2ujuDm225QFte-HixJKtA/exec";

export const DOC_TYPES = [
  { value: "", label: "Selecione o tipo..." },
  { value: CertidaoType.FEDERAL, label: CertidaoType.FEDERAL },
  { value: CertidaoType.ESTADUAL, label: CertidaoType.ESTADUAL },
  { value: CertidaoType.MUNICIPAL, label: CertidaoType.MUNICIPAL },
  { value: CertidaoType.TRABALHISTA, label: CertidaoType.TRABALHISTA },
  { value: CertidaoType.OUTRO, label: CertidaoType.OUTRO },
];