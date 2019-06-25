var PROTO_FILE_PATH = 'E:/2019/front_end/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_FILE_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var grpcService = grpc.loadPackageDefinition(packageDefinition).com.lec.proto;

var server = new grpc.Server();
server.addService(grpcService.StudentService.service, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentByAge: getStudentByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});
server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());

server.start();

function getRealNameByUsername(call, callBack) {
    console.log("call:" + call.request.username);
    callBack(null, {realname: "张三"});
}

function getStudentByAge(call, callBack) {

}

function getStudentsWrapperByAges(call, callBack) {

}

function biTalk(call, callBack) {

}