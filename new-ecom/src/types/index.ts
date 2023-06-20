
export type navArrType={
    id?:number;
    title?:string;
    path?:string;
    subMenu?:subMenuType[]
}
export type subMenuType={
    id?:number;
    subTitle?:string;
    subPath?:string;
}
export type breadcrumbLogoArrType={
    id:number
    img:{
        src:string;
    }
}

export type handMadeArrType={
    id:number
    title:string
    subtitle:string
    content:string
    img:{
        src:string
    }
}

export type FreecardArrTypes={
    id:number
    img:{
        src:string;
    }
    title:string
    subTitle:string
}


export type SliderArrType={
    id:number
    text:string
}



export type arrivalsArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
}

export type OurTeamArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    
}

export type BrandlogoArrType={
id:number
img:{
    src:string
}
}

export type FeedbackcardArrType={
    id:number
    img:{
        src:string
    } 
    title:string
    subtitle:string
}


export type blogArrType={
    id:number
    img:{
        src:string
    } 
    date:string
    comment:string
    title:string
    subtitle:string
}

export type recentArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    
}

export type relatedArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    
}


export type fqaArrType={
    id:number
    title:string
    content:string
    
}

export type serviceArrType={
    id:number
    img:{
        src:string
    }
    title:string
    content:string
    
}
export type contactArrType={
    id:number
    img:{
        src:string
    }
    title:string
    content:string
    content1:string
    
}

export type featuredArrType={
    id:number
    img:{
        src:string
    }
    title:string
    content:string
}

export type BestArrType={
    id:number
    img:{
        src:string
    }
    title:string
    subtitle:string
    
}

export type shoppingArrType={
    id?:number;
    title?:string;
    path?:string;
}
