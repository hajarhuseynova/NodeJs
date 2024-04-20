import { getAboutDetail } from "./request/aboutService.js";
import { bindAboutPart } from "./creators/aboutCreators.js";
import { getServiceDetail } from "./request/serviceService.js";
import { bindServiceData } from "./creators/serviceCreators.js";
import { getBlogDetail } from "./request/blogService.js";
import { bindBlogData } from "./creators/blogCreators.js";

async function loadMyData(){
    let aboutResult= await getAboutDetail()
    bindAboutPart(aboutResult[0])
    let serviceResult = await getServiceDetail();
    console.log(serviceResult)
    bindServiceData(serviceResult);
    let blogResult = await getBlogDetail();
    bindBlogData(blogResult);

}

document.addEventListener("DOMContentLoaded",loadMyData)