"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert({
        projectId: "code-labs-e4e35",
        clientEmail: "firebase-adminsdk-5tu74@code-labs-e4e35.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6XzM5ZdO6vcpp\n4UD81SFiACu5G7NOS0tK6QJu1AGFbZvSu6rRDaHckutDBsMY9ULgntV8yyVnnaxa\n8Ds+VvbZq/TYns4rD2An9HJP411lxuoz3eDP298wlTCtI8DI9zqHYIOcQlXJvzYa\n8SFnhDEGzpsrjco3xQSqCVad9kkEMyvFKsbem68OfAxN2W9lpYg+x2bpTreh+0zs\nhzqMYp14Ss9x2wVfV0HQRgs84C9ARKP1WvR40b2WKYpiQ+iuIMPk0AFFWrfK9HPe\n+hMlrGxAAE8EbQtuB5fxqut8h2Fr5pdlf+IzurSrA0J9/yivl82zFGDWS9l/dGIL\ngvuZlOIPAgMBAAECggEANpiV2m4kgNOBXNQCZC6RWXKgXFkrhTeUZmzs7AeKLIqn\n96tHRnd+X63gYmG0PHb4sPGGq8ic/AYaDAfM6x2xsaFomB6pWb7m1b2L0TBTV3HW\ngPwyE+Iet041FLthCd421Jqm41shY3jywiC6PudgL1TN6wvd3cmG7MLQj3Sq/iH4\nUYL3uxgDrrZuwzMeMTXHa0QOA0Yb8eqyYey1G7f9U2QXqTOAI8Lz+nBWhfDT+4P2\nnyd1jTgg84exOPemFai0e7JcFV5QHStglwsKTJXp2X25J36nBOcmCOvf7M5OYcsv\n6dzYcNbz4e90afm8tod9Je9n8L40N2tFVagkmTT89QKBgQD49Rf17uu2EboNNPwm\nNbZuyvP9sk88e8Jc1C4AJeKOJMapkIclGO93cNUyjr64BllLft3alal9P/wu9fUl\nMkgxNCYM4DKIQ55gHYMNMTjYWQSxB77sRNssxU23nieEe6EQAL6NExkVSTi4XOZg\n+3FSSaCWc/fkHceT5BPEr7n5AwKBgQC/pN97dJgxmGv4V2yZOPLKlDqMdbpYl8oV\n0QIpL8tujHEV9jGb3b4gnUShT+l5yChm3nt92JnFcDDM+fr/EiyC0RvHoqE8P/iF\nDWOd/5ifGruM2XXB033CWIkPuTH0+qbHxyccGb0ntRz5hNey/DaYJFAW5Q5mebQn\n44C0r3FXBQKBgE9++/K1IyFVUcKr26Rb3HBOcFDfYjvfDPZVbobvkgNvrNwyYWUw\nLC9IoVtuh2n95P+deDw3NBLhnqZkNa51+uVzUH8mDBzE8sqgQduxjwROkJfy8D1D\n03TdX+61GstMKucQRciIg6bvZaRBTfND9zCegB/q0gpOlA8eck2JC2p/AoGAE0nA\nxGgjuToiA8iowXMd3I22ptRigPAmArQah5Kr4uB3sUIqFAnpTNcHRUUJtpwSlOfn\nfe8C6wAzqS2vuWRW3oO1TA5uM+YsWRfT4t8KuVizb6WjWHK0wY6vnMmC4akoiArf\nQNDGXOy5kdNw8i64P+/Hr8Y2ANJW83zOQ2E1AxECgYBIo1dX0vQv+hmP/Kdz8WRN\ngorD5zkMz6PEyEDl2Yd6KHh0NPOUngDzr/zeoSb96gIWAiUWNR3J4lBIKnrfjVOA\nKslHZS4r04kaGUmuFXd/qwcYLHYSNzU2D+t8gQxtCNza2l0BTRZN9Iq/pd3yMLFi\nhZ/+3w8GGuGGDWsa3VNBKw==\n-----END PRIVATE KEY-----\n",
    }),
});
exports.default = firebaseApp;
//# sourceMappingURL=firebase-app.js.map