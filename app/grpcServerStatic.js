var service = require('../static_codegen/proto/Student_grpc_pb');
var message = require('../static_codegen/proto/Student_pb');
var grpc = require('grpc');

var server = new grpc.Server();
server.addService(StudentServiceService.service, {
    getRealNameByUsername: getRealNameByUsername,
    getStudentByAge: getStudentByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});
server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callBack) {
    console.log("request:" + call.request.getUsername);
    var myResponse = new messages.MyResponse();
    myResponse.setRealname('赵六');
    callBack(null, myResponse);
}


function getStudentByAge(call, callBack) {
}

function getStudentsWrapperByAges(call, callBack) {
}

function biTalk(call, callBack) {
}