import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile:{
            type:String, // cloudniary url
            required:true

        },
        thumbnail:{
            type:String,
            required:true
        }


    },
    {
        timestamps:true
    }
)


export const Video = mongoose.model("Video",videoSchema)
