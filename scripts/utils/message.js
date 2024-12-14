
let addtime;
export function displayMessage(productId){
    let displayAddedMessage =document.querySelector(`.js-added-to-cart-${productId}`);
    displayAddedMessage.classList.add('added-to-cart-visible'); //when use classlist that never classname use like .added-to-cart-visible.
    if(addtime)
    {
        clearTimeout(addtime);
    }
    let setTime=setTimeout(()=>{displayAddedMessage.classList.remove('added-to-cart-visible');},2000);
     addtime=setTime;
} 