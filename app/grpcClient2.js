var service = require('../static_codegen/proto/Student_grpc_pb');
var message = require('../static_codegen/proto/Student_pb');
var grpc = require('grpc');

var client = new service.StudentServiceClient('localhost:8899',grpc.credentials.createInsecure());
var request = new messages.MyRequest();
request.setUsername('张三');
client.getRealNameByUsername(request,function(error,respData){
    console.log(respData.getRealName());
});