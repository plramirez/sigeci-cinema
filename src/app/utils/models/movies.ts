export interface IMoviesVIew {
    movieId: number
    movieName: string
    genderId: number
    genderName: string
    classificationId: number
    classificationName: string
    synopsis: string
    directorName: string
    releaseDate: string
    releaseHour: string
    movieTag: string
    imageBytes: string
    imageName: string
    imageExtension: string
    isRecordActive: boolean
    createdAt: string
    createdByUserId: number
    lastModificationAt: string
    lastModificationByUserId: number
}

export interface IMoviePost {
    movieId: number | null
    movieName: string | null
    genderId: number | null
    classificationId: number | null
    synopsis: string | null
    directorName: string | null
    releaseDate: string | null
    releaseHour: string | null
    userId: number | null | undefined
    actorsInMovies: IActorsInMoviePost[]
}

export interface IActorsInMoviePost {
    acInMoId: number
    actorFirstname: string
    actorLastname: string
    movieId: number
    userId: number
}

export interface IMovieClassificationVIew {
    classificationId: number
    classificationName: string
    isRecordActive: boolean
    createdAt: string
    createdByUserId: number
    lastModificationAt: string
    lastModificationByUserId: number
}
  
export interface IMovieGenderView {
    genderId: number
    genderName: string
    isRecordActive: boolean
    createdAt: string
    createdByUserId: number
    lastModificationAt: string
    lastModificationByUserId: number
}
  