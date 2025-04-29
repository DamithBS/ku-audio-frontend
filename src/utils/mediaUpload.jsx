import { createClient } from "@supabase/supabase-js"



const anon_key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aGtpdGVlZmVkYWRybmRpanRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NTk4MDYsImV4cCI6MjA2MTEzNTgwNn0.gRnA40aQ9YaRTRagrP6mNJEhNKvh8A724WbRHSJJgJg"

const supabase_url="https://nzhkiteefedadrndijtr.supabase.co"

const supabase = createClient(supabase_url,anon_key)

export default function mediaUpload(file) {

    return new Promise((resolve, reject) => {
        if(!file){
            console.log("no file selected");
            
        }

        const timestamp = new Date().getTime();
        const fileName = timestamp+file.name;
        
        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
        })
        .then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
            resolve(publicUrl);
            
        })
        .catch((err)=>{
            console.log("error uploading file");
        })
    })


    
}
