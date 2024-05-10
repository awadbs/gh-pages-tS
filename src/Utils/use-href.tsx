import React from "react";

export type Page = "gallery" | "places" | "notes" | "work";
export type UseNavigationReturnType = {
    current: Page;
    next: Page;
    previous: Page;
}
export const useNavigation = () => {
    let href = "/"
    if(window){
        href = window.location.href;

        ///     if(window){
      
        // set title here. like "a gallery", "a thought", "a place"
    }
    // if href is Page, return next/previous/current.
    //if href is like /notes/{somenotes}. return back. Check if react router can do this by itself.

    // get what page i am currently looking at.
    // get which page to go back to
    // get which page to go next

}