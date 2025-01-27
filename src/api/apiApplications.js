import supabaseClient,{supabaseUrl} from "@/utils/supabase";

export async function applyToJob(token,_,jobData)
{
    const supabase = await supabaseClient(token);
    const random=Math.floor(Math.random()*900000);
    const fileName=`resume-${random}-${jobData.candidate_id}`
  
    await supabase.storage.from('resumes').upload(fileName,jobData.resume);
    const {error:storageError}=await supabase.storage.from("companies").select("*");
      
  
      if (storageError) {
        console.error("Error Uploading Resume", error);
        return null;
      }

      const resume=`${supabaseUrl}/storage/v1/object/public/resume/${fileName}`;
    
      const {data,error}=await supabase.from("applications").insert([
        {
        ...jobData,
        resume,
      },
    ])
    .select();

    if(error)
    {
        console.log("Error submitting Application",error);
        return null;
    }

      return data;
}