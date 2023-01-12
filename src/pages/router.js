import index from "./index/router";
import product from "./product/router";
import statistics from "./statistics/router";

const authRoutes = [];

authRoutes.push(...index);
authRoutes.push(...product);
authRoutes.push(...statistics);

export default authRoutes;
