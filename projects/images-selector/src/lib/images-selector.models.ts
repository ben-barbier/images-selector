export interface Labels {
    add: string;
    upload: string;
}

export interface ImagePreview {
    url: any;
    loading: boolean;
    status: status;
}

export type status = 'OK' | 'PENDING' | 'ERROR';
