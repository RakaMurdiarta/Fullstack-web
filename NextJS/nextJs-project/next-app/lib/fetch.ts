import {
    getStoryblokApi,
    ISbStoryParams,
  } from "@storyblok/react";

import React from 'react'

const fetch = async (slug:string,version:'draft'|'published'|undefined) => {
    try{
        const storyBlockApi=getStoryblokApi();
        const params:ISbStoryParams={
            version:version
        }

        let { data } = await storyBlockApi.get(`cdn/stories/${slug}`, params);
        let {data:navigation}=await storyBlockApi.get('cdn/stories/layout/navigation',params)

        return {
            props:{
                story:data?data.story:false,
                key:data?data.id:false,
                navigation:navigation?navigation.story:false,
                // footer:footer?footer.story:false

            },
            revalidate:3600,
        }
    }catch (error){
        return false
    }
}

export default fetch