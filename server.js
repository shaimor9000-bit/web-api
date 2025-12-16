const http = required('http')
const app=require('./app');
const port = 5050;
const srv=http.createserver(app);
srv.listen(port,()=>{
    console.log('server up');
});