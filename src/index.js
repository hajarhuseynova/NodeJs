import { getAboutDetail } from "./request/aboutService.js";
import { bindAboutPart } from "./creators/aboutCreators.js";
import { getServiceDetail } from "./request/serviceService.js";
import { bindServiceData } from "./creators/serviceCreators.js";
import { getBlogDetail } from "./request/blogService.js";
import { bindBlogData } from "./creators/blogCreators.js";
import {getTestinomialDetail} from "./request/testinomialService.js"
import { bindTestinomialData } from "./creators/testinomialCreators.js";
async function loadMyData(){
    let aboutResult= await getAboutDetail()
    bindAboutPart(aboutResult[0])
    let serviceResult = await getServiceDetail();
    console.log(serviceResult)
    bindServiceData(serviceResult);
    let blogResult = await getBlogDetail();
    bindBlogData(blogResult);
    let testinomialResult = await getTestinomialDetail();
    console.log(testinomialResult)
    bindTestinomialData(testinomialResult);
}
document.addEventListener("DOMContentLoaded",loadMyData)