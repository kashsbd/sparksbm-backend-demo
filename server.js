const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const { db } = require('./api/config/db.config');
const staffRouter = require('./api/routes/staff');
const accountRouter = require('./api/routes/account');
const caseRouter = require('./api/routes/case');
const caseCategoryRouter = require('./api/routes/case_category');
const clientRouter = require('./api/routes/client');
const expenseTypeRouter = require('./api/routes/expense_type');
const invoiceRouter = require('./api/routes/invoice');
const caseInvoiceRouter = require('./api/routes/case_invoice');
const staffCaseRouter = require('./api/routes/staff_case');
const caseCategoryCaseRouter = require('./api/routes/case_category_case');
const addressRouter = require('./api/routes/address');
const companyTypeClientRouter = require('./api/routes/company_type_client');
const personTypeClientRouter = require('./api/routes/person_type_client');


db.authenticate()
	.then(async () => {
		await db.sync();
		console.log('connected to db.');

		const app = express();

		app.use(cors());

		app.use((req, res, next) => {
			res.header('Acess-Control-Allow-Origin', '*');
			res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			next();
		});

		app.use(morgan('dev'));
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());

		//app routes
		app.use('/staffs', staffRouter);
		app.use('/accounts', accountRouter);
		app.use('/cases', caseRouter);
		app.use('/case-categories', caseCategoryRouter);
		app.use('/clients', clientRouter);
		app.use('/expense-types', expenseTypeRouter);
		app.use('/invoices', invoiceRouter);
		app.use('/case-invoices', caseInvoiceRouter);


		app.use((req, res, next) => {
			const error = new Error('Not found');
			error.status = 404;
			next(error);
		});

		app.use((error, req, res, next) => {
			res.status(error.status || 500);
			res.json({
				error: {
					message: error.message,
				},
			});
		});

		const port = process.env.port || 3000;
		app.listen(port, () => console.log(`app listening on port ` + port));
	})
	.catch(err => console.error('unable to connect to the db:', err));

