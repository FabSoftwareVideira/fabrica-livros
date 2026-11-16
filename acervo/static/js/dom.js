export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export const elements = {
  authScreen: $("#auth-screen"),
  application: $("#application"),
  authTitle: $("#auth-title"),
  authIntro: $("#auth-intro"),
  studentDialog: $("#student-dialog"),
  studentForm: $("#student-form"),
  detailDialog: $("#student-detail-dialog"),
  signatureDialog: $("#signature-dialog"),
  canvas: $("#signature-canvas"),
  toastRegion: $("#toast-region"),
};
