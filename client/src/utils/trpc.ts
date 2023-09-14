import { createTRPCReact } from '@trpc/react-query';
import type { TrpcRouter } from '../../../common/trpc-router.type'; 
import { queryClient } from '../App';
import { useEffect } from 'react';
 
export const trpc = createTRPCReact<TrpcRouter>();

export function addCurrencyToCart(currentCurrency: any) {
    const currentCartList: any = queryClient.getQueryData([`cartList`]) || []
    currentCartList.push(currentCurrency)
    queryClient.setQueryData([`currentCartList`], currentCartList)
    addCurrencyToLocalStorage(currentCurrency)
}

export function addCurrencyToLocalStorage(currency: any){
    let existingCartList: any = localStorage.getItem('newCurrentCartList')
    existingCartList = existingCartList ? JSON.parse(existingCartList) : []; 
    existingCartList.push(currency);
    localStorage.setItem('newCurrentCartList', JSON.stringify(existingCartList));
}

export function updadeTotal(list: any[]){
    let total = list.reduce(
        (prev: any, next: any) => prev + +next.priceUsd * next.amount,
        0
      ) || 0;
    
    localStorage.setItem('currentCartTotal', JSON.stringify(total))
}

export function refreshCartList(){
    let existingCartList: any = localStorage.getItem('newCurrentCartList');
    existingCartList = existingCartList ? JSON.parse(existingCartList) : []; 
    queryClient.setQueryData([`currentCartList`], existingCartList);
}