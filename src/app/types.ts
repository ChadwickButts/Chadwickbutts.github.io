type experienceDetails = {
    id: number
    title?: string 
    company?: string
    location?: string
    start?: string
    end?: string
    duties?: string[]
    university?: string
    degree?: string
    study?: string
    graduationDate?: string
}

type skill = { 
    name: string 
    skill: string 
    years: number
    layer: Array<number> 
    img: string 
}

type project = {
    id: number
    projectName: string
    stack: Array<string>
    description: string
    demoLink: string
    repo: string
}
