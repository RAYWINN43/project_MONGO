interface ResponseApi<T> {
    success: boolean ;
    message: string ;
    data?: T ;
    timestamp: string ;
}

export default ResponseApi ;