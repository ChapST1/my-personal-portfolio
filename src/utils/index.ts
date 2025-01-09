export function genereateFullImageQualityUrl(url:string){
 // "https://thumbs2.imgbox.com/92/90/6pBwHQMf_t.png" -> thumbnail
 // "https://images2.imgbox.com/92/90/6pBwHQMf_o.png" -> full resolution

 return url
        .replace("thumbs2", "images2")
        .replace("_t", "_o")
}