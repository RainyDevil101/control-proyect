const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.paths = {
            // example: '/api/example',
            user:        '/api/user',
            userExcel:   '/api/userExcel',
            dataExcel:   '/api/dataExcel',
            auth:        '/api/auth',
            test:        '/api/test',
            location:    '/api/location',
            division:    '/api/division',
            material:    '/api/material',
            refund:      '/api/refund',
            refundByDate:'/api/refundByDate',
            client:      '/api/client',
            place:       '/api/place',
            destination: '/api/destination',
        };

        
        //Middlewares
        this.middlewares();
        
        //Application Routes
        this.routes();
        
        // this.initJobs();

    };

    middlewares() {
        //Morgan
        this.app.use(morgan('dev'));

        //CORS
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        //Lecture
        this.app.use( cors() );

        this.app.use( express.static('public') );

        this.app.use( express.json() );

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true,
        }));

    };

    routes() {
        // this.app.use(this.paths.example, require('../routes/exmaple.routes'));
        this.app.use(this.paths.user, require('../routes/user.routes'));
        this.app.use(this.paths.userExcel, require('../routes/userExcel.routes'));
        this.app.use(this.paths.dataExcel, require('../routes/dataExcel.routes'));
        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.test, require('../routes/test.routes'));
        this.app.use(this.paths.location, require('../routes/location.routes'));
        this.app.use(this.paths.division, require('../routes/division.routes'));
        this.app.use(this.paths.material, require('../routes/material.routes'));
        this.app.use(this.paths.refund, require('../routes/refund.routes'));
        this.app.use(this.paths.refundByDate, require('../routes/refundInform.routes'));
        this.app.use(this.paths.client, require('../routes/client.routes'));
        this.app.use(this.paths.place, require('../routes/dispatchPlaces.routes'));
        this.app.use(this.paths.destination, require('../routes/destination.routes'));
    };

    // initJobs() {

    //     const bree = new Bree({
    //         jobs: [{
    //             name: 'sendEmail',
    //             interval : "at 08:30 am",
    //             worker: {
    //                 workerData: {
    //                     description: 'This job will send emails.'
    //                 },
    //             },
    //         }],
    //     });

    //     bree.start();

    // };

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server online', this.port);
        });
    };

};

module.exports = Server;