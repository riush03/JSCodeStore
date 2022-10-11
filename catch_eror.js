try{
    //catching and neutralizing an error
    const uri = decodeURI("http%test");

    console.log('sucess');
}catch(error)
{
    console.log(error);
}finally{
    console.log("All operations are completed.")
}