var PROTO_FILE_PATH = 'E:/2019/front_end/grpc_demo/proto/Student.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_FILE_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var grpcService = grpc.loadPackageDefinition(packageDefinition).com.lec.proto;

var client = new grpcService.StudentService('localhost:8899', grpc.credentials.createInsecure());

client.getRealNameByUsername({username: '李四'}, function (error, respData) {
    console.log(respData);
});
