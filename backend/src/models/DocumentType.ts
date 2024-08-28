// models/DocumentType.ts

export enum DocumentType {
    CC = "CC",
    TI = "TI",
    CE = "CE",
    CUI = "CUI",
    PA = "PA",
    PEP = "PEP",
    NATIONAL_ID = "National ID",
    DRIVER_LICENSE = "Driver License",
    BIRTH_CERTIFICATE = "Birth Certificate",
    OTHER = "Other",
}

export class DocumentTypeModel {
    public static getDocumentTypes(): DocumentType[] {
        return Object.values(DocumentType);
    }

    public static getDocumentTypeByKey(key: string): DocumentType | undefined {
        return DocumentType[key as keyof typeof DocumentType];
    }
}


