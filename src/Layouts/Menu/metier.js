export const moveLeft=()=>{
    const ul=document.querySelector(".movie__genres .list");
    ul.scrollBy(100,0);
}
export const moveRight=()=>{
    const ul=document.querySelector(".movie__genres .list");
    ul.scrollBy(-100,0);
}