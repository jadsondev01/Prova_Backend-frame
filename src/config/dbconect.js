import moongose from "mongoose"

async function connectDatabase(){
    moongose.connect("mongodb+srv://jadson0120:87500273@cluster0.qvvxqco.mongodb.net/loucosporfutebol?retryWrites=true&w=majority")
     
      return moongose.connection;
}

export default connectDatabase;