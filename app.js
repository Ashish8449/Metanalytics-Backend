const express = require("express");
const morgan = require("morgan");

const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");


const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const FoodRoutes = require("./routes/foodRoutes");
const MealRoutes = require("./routes/mealRoutes");
const UserRoutes = require("./routes/userRoutes");

const app = express();

// 1) GLOBAL MIDDLEWARES

// Set security HTTP headers
app.use(helmet());



  app.use(morgan("dev"));





// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());





// Serving static files
app.use(express.static(`${__dirname}/public`));

// 3) ROUTES
app.use("/api/food", FoodRoutes);
app.use("/api/meal", MealRoutes);
app.use("/api/user", UserRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
