/*
const weeklyStockOptions = [
  { ticker: "AA", expirationDay: "FRI" },
  { ticker: "AAL", expirationDay: "FRI" },
  { ticker: "AAOI", expirationDay: "FRI" },
  { ticker: "ABBV", expirationDay: "FRI" },
  { ticker: "ABNB", expirationDay: "FRI" },
  { ticker: "ABR", expirationDay: "FRI" },
  { ticker: "ABT", expirationDay: "FRI" },
  { ticker: "ACB", expirationDay: "FRI" },
  { ticker: "ACHR", expirationDay: "FRI" },
  { ticker: "ACMR", expirationDay: "FRI" },
  { ticker: "ACN", expirationDay: "FRI" },
  { ticker: "ADBE", expirationDay: "FRI" },
  { ticker: "ADI", expirationDay: "FRI" },
  { ticker: "ADM", expirationDay: "FRI" },
  { ticker: "ADP", expirationDay: "FRI" },
  { ticker: "ADSK", expirationDay: "FRI" },
  { ticker: "AEO", expirationDay: "FRI" },
  { ticker: "AFL", expirationDay: "FRI" },
  { ticker: "AFRM", expirationDay: "FRI" },
  { ticker: "AG", expirationDay: "FRI" },
  { ticker: "AGNC", expirationDay: "FRI" },
  { ticker: "AI", expirationDay: "FRI" },
  { ticker: "AIG", expirationDay: "FRI" },
  { ticker: "AKAM", expirationDay: "FRI" },
  { ticker: "ALB", expirationDay: "FRI" },
  { ticker: "ALGN", expirationDay: "FRI" },
  { ticker: "ALLY", expirationDay: "FRI" },
  { ticker: "ALT", expirationDay: "FRI" },
  { ticker: "AMAT", expirationDay: "FRI" },
  { ticker: "AMBA", expirationDay: "FRI" },
  { ticker: "AMC", expirationDay: "FRI" },
  { ticker: "AMD", expirationDay: "FRI" },
  { ticker: "AMGN", expirationDay: "FRI" },
  { ticker: "AMZN", expirationDay: "FRI" },
  { ticker: "ANET", expirationDay: "FRI" },
  { ticker: "ANF", expirationDay: "FRI" },
  { ticker: "APA", expirationDay: "FRI" },
  { ticker: "APLD", expirationDay: "FRI" },
  { ticker: "APO", expirationDay: "FRI" },
  { ticker: "APP", expirationDay: "FRI" },
  { ticker: "APPS", expirationDay: "FRI" },
  { ticker: "APT", expirationDay: "FRI" },
  { ticker: "AR", expirationDay: "FRI" },
  { ticker: "ARDX", expirationDay: "FRI" },
  { ticker: "ARM", expirationDay: "FRI" },
  { ticker: "ASAN", expirationDay: "FRI" },
  { ticker: "ASML", expirationDay: "FRI" },
  { ticker: "ASO", expirationDay: "FRI" },
  { ticker: "ASTS", expirationDay: "FRI" },
  { ticker: "ATMU", expirationDay: "FRI" },
  { ticker: "AVGO", expirationDay: "FRI" },
  { ticker: "AVTR", expirationDay: "FRI" },
  { ticker: "AVXL", expirationDay: "FRI" },
  { ticker: "AXP", expirationDay: "FRI" },
  { ticker: "AZN", expirationDay: "FRI" },
  { ticker: "BA", expirationDay: "FRI" },
  { ticker: "BABA", expirationDay: "FRI" },
  { ticker: "BAC", expirationDay: "FRI" },
  { ticker: "BAX", expirationDay: "FRI" },
  { ticker: "BB", expirationDay: "FRI" },
  { ticker: "BBAI", expirationDay: "FRI" },
  { ticker: "BBIO", expirationDay: "FRI" },
  { ticker: "BBWI", expirationDay: "FRI" },
  { ticker: "BBY", expirationDay: "FRI" },
  { ticker: "BEKE", expirationDay: "FRI" },
  { ticker: "BHC", expirationDay: "FRI" },
  { ticker: "BIDU", expirationDay: "FRI" },
  { ticker: "BIIB", expirationDay: "FRI" },
  { ticker: "BILI", expirationDay: "FRI" },
  { ticker: "BILL", expirationDay: "FRI" },
  { ticker: "BITF", expirationDay: "FRI" },
  { ticker: "BKNG", expirationDay: "FRI" },
  { ticker: "BLK", expirationDay: "FRI" },
  { ticker: "BLNK", expirationDay: "FRI" },
  { ticker: "BMBL", expirationDay: "FRI" },
  { ticker: "BMY", expirationDay: "FRI" },
  { ticker: "BP", expirationDay: "FRI" },
  { ticker: "BTBT", expirationDay: "FRI" },
  { ticker: "BTU", expirationDay: "FRI" },
  { ticker: "BUD", expirationDay: "FRI" },
  { ticker: "BURL", expirationDay: "FRI" },
  { ticker: "BX", expirationDay: "FRI" },
  { ticker: "BYND", expirationDay: "FRI" },
  { ticker: "BYON", expirationDay: "FRI" },
  { ticker: "C", expirationDay: "FRI" },
  { ticker: "CAG", expirationDay: "FRI" },
  { ticker: "CAH", expirationDay: "FRI" },
  { ticker: "CAN", expirationDay: "FRI" },
  { ticker: "CAR", expirationDay: "FRI" },
  { ticker: "CART", expirationDay: "FRI" },
  { ticker: "CAT", expirationDay: "FRI" },
  { ticker: "CAVA", expirationDay: "FRI" },
  { ticker: "CBOE", expirationDay: "FRI" },
  { ticker: "CC", expirationDay: "FRI" },
  { ticker: "CCCC", expirationDay: "FRI" },
  { ticker: "CCJ", expirationDay: "FRI" },
  { ticker: "CCL", expirationDay: "FRI" },
  { ticker: "CELH", expirationDay: "FRI" },
  { ticker: "CF", expirationDay: "FRI" },
  { ticker: "CGC", expirationDay: "FRI" },
  { ticker: "CHPT", expirationDay: "FRI" },
  { ticker: "CHTR", expirationDay: "FRI" },
  { ticker: "CHWY", expirationDay: "FRI" },
  { ticker: "CI", expirationDay: "FRI" },
  { ticker: "CIFR", expirationDay: "FRI" },
  { ticker: "CL", expirationDay: "FRI" },
  { ticker: "CLF", expirationDay: "FRI" },
  { ticker: "CLOV", expirationDay: "FRI" },
  { ticker: "CLSK", expirationDay: "FRI" },
  { ticker: "CLX", expirationDay: "FRI" },
  { ticker: "CMA", expirationDay: "FRI" },
  { ticker: "CMCSA", expirationDay: "FRI" },
  { ticker: "CMG", expirationDay: "FRI" },
  { ticker: "CMI", expirationDay: "FRI" },
  { ticker: "CNC", expirationDay: "FRI" },
  { ticker: "COF", expirationDay: "FRI" },
  { ticker: "COHR", expirationDay: "FRI" },
  { ticker: "COIN", expirationDay: "FRI" },
  { ticker: "COP", expirationDay: "FRI" },
  { ticker: "COST", expirationDay: "FRI" },
  { ticker: "COTY", expirationDay: "FRI" },
  { ticker: "CPB", expirationDay: "FRI" },
  { ticker: "CPNG", expirationDay: "FRI" },
  { ticker: "CPRI", expirationDay: "FRI" },
  { ticker: "CRM", expirationDay: "FRI" },
  { ticker: "CROX", expirationDay: "FRI" },
  { ticker: "CRSP", expirationDay: "FRI" },
  { ticker: "CRWD", expirationDay: "FRI" },
  { ticker: "CSCO", expirationDay: "FRI" },
  { ticker: "CSIQ", expirationDay: "FRI" },
];
*/

const weeklyStockOptions = [
  { ticker: "AA", expirationDay: "FRI" },
  { ticker: "AAL", expirationDay: "FRI" },
  { ticker: "AAOI", expirationDay: "FRI" },
  { ticker: "AAP", expirationDay: "FRI" },
  { ticker: "AAPL", expirationDay: "FRI" },
  { ticker: "ABBV", expirationDay: "FRI" },
  { ticker: "ABNB", expirationDay: "FRI" },
  { ticker: "ABR", expirationDay: "FRI" },
  { ticker: "ABT", expirationDay: "FRI" },
  { ticker: "ACB", expirationDay: "FRI" },
  { ticker: "ACHR", expirationDay: "FRI" },
  { ticker: "ACMR", expirationDay: "FRI" },
  { ticker: "ACN", expirationDay: "FRI" },
  { ticker: "ADBE", expirationDay: "FRI" },
  { ticker: "ADI", expirationDay: "FRI" },
  { ticker: "ADM", expirationDay: "FRI" },
  { ticker: "ADP", expirationDay: "FRI" },
  { ticker: "ADSK", expirationDay: "FRI" },
  { ticker: "AEO", expirationDay: "FRI" },
  { ticker: "AFL", expirationDay: "FRI" },
  { ticker: "AFRM", expirationDay: "FRI" },
  { ticker: "AG", expirationDay: "FRI" },
  { ticker: "AGNC", expirationDay: "FRI" },
  { ticker: "AI", expirationDay: "FRI" },
  { ticker: "AIG", expirationDay: "FRI" },
  { ticker: "AKAM", expirationDay: "FRI" },
  { ticker: "ALB", expirationDay: "FRI" },
  { ticker: "ALGN", expirationDay: "FRI" },
  { ticker: "ALLY", expirationDay: "FRI" },
  { ticker: "ALT", expirationDay: "FRI" },
  { ticker: "AMAT", expirationDay: "FRI" },
  { ticker: "AMBA", expirationDay: "FRI" },
  { ticker: "AMC", expirationDay: "FRI" },
  { ticker: "AMD", expirationDay: "FRI" },
  { ticker: "AMGN", expirationDay: "FRI" },
  { ticker: "AMZN", expirationDay: "FRI" },
  { ticker: "ANET", expirationDay: "FRI" },
  { ticker: "ANF", expirationDay: "FRI" },
  { ticker: "APA", expirationDay: "FRI" },
  { ticker: "APLD", expirationDay: "FRI" },
  { ticker: "APO", expirationDay: "FRI" },
  { ticker: "APP", expirationDay: "FRI" },
  { ticker: "APPS", expirationDay: "FRI" },
  { ticker: "APT", expirationDay: "FRI" },
  { ticker: "AR", expirationDay: "FRI" },
  { ticker: "ARDX", expirationDay: "FRI" },
  { ticker: "ARM", expirationDay: "FRI" },
  { ticker: "ASAN", expirationDay: "FRI" },
  { ticker: "ASML", expirationDay: "FRI" },
  { ticker: "ASO", expirationDay: "FRI" },
  { ticker: "ASTS", expirationDay: "FRI" },
  { ticker: "ATMU", expirationDay: "FRI" },
  { ticker: "AVGO", expirationDay: "FRI" },
  { ticker: "AVTR", expirationDay: "FRI" },
  { ticker: "AVXL", expirationDay: "FRI" },
  { ticker: "AXP", expirationDay: "FRI" },
  { ticker: "AZN", expirationDay: "FRI" },
  { ticker: "BA", expirationDay: "FRI" },
  { ticker: "BABA", expirationDay: "FRI" },
  { ticker: "BAC", expirationDay: "FRI" },
  { ticker: "BAX", expirationDay: "FRI" },
  { ticker: "BB", expirationDay: "FRI" },
  { ticker: "BBAI", expirationDay: "FRI" },
  { ticker: "BBIO", expirationDay: "FRI" },
  { ticker: "BBWI", expirationDay: "FRI" },
  { ticker: "BBY", expirationDay: "FRI" },
  { ticker: "BEKE", expirationDay: "FRI" },
  { ticker: "BHC", expirationDay: "FRI" },
  { ticker: "BIDU", expirationDay: "FRI" },
  { ticker: "BIIB", expirationDay: "FRI" },
  { ticker: "BILI", expirationDay: "FRI" },
  { ticker: "BILL", expirationDay: "FRI" },
  { ticker: "BITF", expirationDay: "FRI" },
  { ticker: "BKNG", expirationDay: "FRI" },
  { ticker: "BLK", expirationDay: "FRI" },
  { ticker: "BLNK", expirationDay: "FRI" },
  { ticker: "BMBL", expirationDay: "FRI" },
  { ticker: "BMY", expirationDay: "FRI" },
  { ticker: "BP", expirationDay: "FRI" },
  { ticker: "BTBT", expirationDay: "FRI" },
  { ticker: "BTU", expirationDay: "FRI" },
  { ticker: "BUD", expirationDay: "FRI" },
  { ticker: "BURL", expirationDay: "FRI" },
  { ticker: "BX", expirationDay: "FRI" },
  { ticker: "BYND", expirationDay: "FRI" },
  { ticker: "BYON", expirationDay: "FRI" },
  { ticker: "C", expirationDay: "FRI" },
  { ticker: "CAG", expirationDay: "FRI" },
  { ticker: "CAH", expirationDay: "FRI" },
  { ticker: "CAN", expirationDay: "FRI" },
  { ticker: "CAR", expirationDay: "FRI" },
  { ticker: "CART", expirationDay: "FRI" },
  { ticker: "CAT", expirationDay: "FRI" },
  { ticker: "CAVA", expirationDay: "FRI" },
  { ticker: "CBOE", expirationDay: "FRI" },
  { ticker: "CC", expirationDay: "FRI" },
  { ticker: "CCCC", expirationDay: "FRI" },
  { ticker: "CCJ", expirationDay: "FRI" },
  { ticker: "CCL", expirationDay: "FRI" },
  { ticker: "CELH", expirationDay: "FRI" },
  { ticker: "CF", expirationDay: "FRI" },
  { ticker: "CGC", expirationDay: "FRI" },
  { ticker: "CHPT", expirationDay: "FRI" },
  { ticker: "CHTR", expirationDay: "FRI" },
  { ticker: "CHWY", expirationDay: "FRI" },
  { ticker: "CI", expirationDay: "FRI" },
  { ticker: "CIFR", expirationDay: "FRI" },
  { ticker: "CL", expirationDay: "FRI" },
  { ticker: "CLF", expirationDay: "FRI" },
  { ticker: "CLOV", expirationDay: "FRI" },
  { ticker: "CLSK", expirationDay: "FRI" },
  { ticker: "CLX", expirationDay: "FRI" },
  { ticker: "CMA", expirationDay: "FRI" },
  { ticker: "CMCSA", expirationDay: "FRI" },
  { ticker: "CMG", expirationDay: "FRI" },
  { ticker: "CMI", expirationDay: "FRI" },
  { ticker: "CNC", expirationDay: "FRI" },
  { ticker: "COF", expirationDay: "FRI" },
  { ticker: "COHR", expirationDay: "FRI" },
  { ticker: "COIN", expirationDay: "FRI" },
  { ticker: "COP", expirationDay: "FRI" },
  { ticker: "COST", expirationDay: "FRI" },
  { ticker: "COTY", expirationDay: "FRI" },
  { ticker: "CPB", expirationDay: "FRI" },
  { ticker: "CPNG", expirationDay: "FRI" },
  { ticker: "CPRI", expirationDay: "FRI" },
  { ticker: "CRM", expirationDay: "FRI" },
  { ticker: "CROX", expirationDay: "FRI" },
  { ticker: "CRSP", expirationDay: "FRI" },
  { ticker: "CRWD", expirationDay: "FRI" },
  { ticker: "CSCO", expirationDay: "FRI" },
  { ticker: "CSIQ", expirationDay: "FRI" },
  { ticker: "CSTM", expirationDay: "FRI" },
  { ticker: "CSX", expirationDay: "FRI" },
  { ticker: "CTRA", expirationDay: "FRI" },
  { ticker: "CVE", expirationDay: "FRI" },
  { ticker: "CVNA", expirationDay: "FRI" },
  { ticker: "CVS", expirationDay: "FRI" },
  { ticker: "CVX", expirationDay: "FRI" },
  { ticker: "CYTK", expirationDay: "FRI" },
  { ticker: "CZR", expirationDay: "FRI" },
  { ticker: "DAL", expirationDay: "FRI" },
  { ticker: "DASH", expirationDay: "FRI" },
  { ticker: "DB", expirationDay: "FRI" },
  { ticker: "DBX", expirationDay: "FRI" },
  { ticker: "DD", expirationDay: "FRI" },
  { ticker: "DDOG", expirationDay: "FRI" },
  { ticker: "DE", expirationDay: "FRI" },
  { ticker: "DELL", expirationDay: "FRI" },
  { ticker: "DFS", expirationDay: "FRI" },
  { ticker: "DG", expirationDay: "FRI" },
  { ticker: "DHI", expirationDay: "FRI" },
  { ticker: "DHR", expirationDay: "FRI" },
  { ticker: "DIS", expirationDay: "FRI" },
  { ticker: "DJT", expirationDay: "FRI" },
  { ticker: "DKNG", expirationDay: "FRI" },
  { ticker: "DKS", expirationDay: "FRI" },
  { ticker: "DLR", expirationDay: "FRI" },
  { ticker: "DLTR", expirationDay: "FRI" },
  { ticker: "DOCU", expirationDay: "FRI" },
  { ticker: "DOW", expirationDay: "FRI" },
  { ticker: "DPZ", expirationDay: "FRI" },
  { ticker: "DVN", expirationDay: "FRI" },
  { ticker: "DXCM", expirationDay: "FRI" },
  { ticker: "EA", expirationDay: "FRI" },
  { ticker: "EBAY", expirationDay: "FRI" },
  { ticker: "EDIT", expirationDay: "FRI" },
  { ticker: "EDU", expirationDay: "FRI" },
  { ticker: "EL", expirationDay: "FRI" },
  { ticker: "ELF", expirationDay: "FRI" },
  { ticker: "EMR", expirationDay: "FRI" },
  { ticker: "ENPH", expirationDay: "FRI" },
  { ticker: "ENVX", expirationDay: "FRI" },
  { ticker: "EOG", expirationDay: "FRI" },
  { ticker: "EOSE", expirationDay: "FRI" },
  { ticker: "EPD", expirationDay: "FRI" },
  { ticker: "EQT", expirationDay: "FRI" },
  { ticker: "ET", expirationDay: "FRI" },
  { ticker: "ETSY", expirationDay: "FRI" },
  { ticker: "EXPE", expirationDay: "FRI" },
  { ticker: "F", expirationDay: "FRI" },
  { ticker: "FANG", expirationDay: "FRI" },
  { ticker: "FCEL", expirationDay: "FRI" },
  { ticker: "FCX", expirationDay: "FRI" },
  { ticker: "FDX", expirationDay: "FRI" },
  { ticker: "FI", expirationDay: "FRI" },
  { ticker: "FIS", expirationDay: "FRI" },
  { ticker: "FL", expirationDay: "FRI" },
  { ticker: "FOXA", expirationDay: "FRI" },
  { ticker: "FSLR", expirationDay: "FRI" },
  { ticker: "FSLY", expirationDay: "FRI" },
  { ticker: "FTNT", expirationDay: "FRI" },
  { ticker: "FUBO", expirationDay: "FRI" },
  { ticker: "FUTU", expirationDay: "FRI" },
  { ticker: "GD", expirationDay: "FRI" },
  { ticker: "GDDY", expirationDay: "FRI" },
  { ticker: "GE", expirationDay: "FRI" },
  { ticker: "GEHC", expirationDay: "FRI" },
  { ticker: "GEO", expirationDay: "FRI" },
  { ticker: "GERN", expirationDay: "FRI" },
  { ticker: "GILD", expirationDay: "FRI" },
  { ticker: "GIS", expirationDay: "FRI" },
  { ticker: "GL", expirationDay: "FRI" },
  { ticker: "GLW", expirationDay: "FRI" },
  { ticker: "GM", expirationDay: "FRI" },
  { ticker: "GME", expirationDay: "FRI" },
  { ticker: "GNRC", expirationDay: "FRI" },
  { ticker: "GOLD", expirationDay: "FRI" },
  { ticker: "GOOG", expirationDay: "FRI" },
  { ticker: "GOOGL", expirationDay: "FRI" },
  { ticker: "GOOS", expirationDay: "FRI" },
  { ticker: "GPS", expirationDay: "FRI" },
  { ticker: "GRPN", expirationDay: "FRI" },
  { ticker: "GS", expirationDay: "FRI" },
  { ticker: "GSAT", expirationDay: "FRI" },
  { ticker: "GSK", expirationDay: "FRI" },
  { ticker: "GTLB", expirationDay: "FRI" },
  { ticker: "HAL", expirationDay: "FRI" },
  { ticker: "HD", expirationDay: "FRI" },
  { ticker: "HE", expirationDay: "FRI" },
  { ticker: "HES", expirationDay: "FRI" },
  { ticker: "HIMS", expirationDay: "FRI" },
  { ticker: "HIVE", expirationDay: "FRI" },
  { ticker: "HL", expirationDay: "FRI" },
  { ticker: "HLF", expirationDay: "FRI" },
  { ticker: "HOG", expirationDay: "FRI" },
  { ticker: "HON", expirationDay: "FRI" },
  { ticker: "HOOD", expirationDay: "FRI" },
  { ticker: "HPE", expirationDay: "FRI" },
  { ticker: "HPQ", expirationDay: "FRI" },
  { ticker: "HRL", expirationDay: "FRI" },
  { ticker: "HSBC", expirationDay: "FRI" },
  { ticker: "HSY", expirationDay: "FRI" },
  { ticker: "HUM", expirationDay: "FRI" },
  { ticker: "HUT", expirationDay: "FRI" },
  { ticker: "IBM", expirationDay: "FRI" },
  { ticker: "IBRX", expirationDay: "FRI" },
  { ticker: "IEP", expirationDay: "FRI" },
  { ticker: "ILMN", expirationDay: "FRI" },
  { ticker: "IMVT", expirationDay: "FRI" },
  { ticker: "INO", expirationDay: "FRI" },
  { ticker: "INTC", expirationDay: "FRI" },
  { ticker: "INTU", expirationDay: "FRI" },
  { ticker: "IONQ", expirationDay: "FRI" },
  { ticker: "IOT", expirationDay: "FRI" },
  { ticker: "IOVA", expirationDay: "FRI" },
  { ticker: "IP", expirationDay: "FRI" },
  { ticker: "IQ", expirationDay: "FRI" },
  { ticker: "IRBT", expirationDay: "FRI" },
  { ticker: "IREN", expirationDay: "FRI" },
  { ticker: "ISRG", expirationDay: "FRI" },
  { ticker: "IVR", expirationDay: "FRI" },
  { ticker: "JBLU", expirationDay: "FRI" },
  { ticker: "JD", expirationDay: "FRI" },
  { ticker: "JMIA", expirationDay: "FRI" },
  { ticker: "JNJ", expirationDay: "FRI" },
  { ticker: "JOBY", expirationDay: "FRI" },
  { ticker: "JPM", expirationDay: "FRI" },
  { ticker: "JWN", expirationDay: "FRI" },
  { ticker: "KEY", expirationDay: "FRI" },
  { ticker: "KGC", expirationDay: "FRI" },
  { ticker: "KHC", expirationDay: "FRI" },
  { ticker: "KKR", expirationDay: "FRI" },
  { ticker: "KLAC", expirationDay: "FRI" },
  { ticker: "KMB", expirationDay: "FRI" },
  { ticker: "KMI", expirationDay: "FRI" },
  { ticker: "KO", expirationDay: "FRI" },
  { ticker: "KR", expirationDay: "FRI" },
  { ticker: "KSS", expirationDay: "FRI" },
  { ticker: "KVUE", expirationDay: "FRI" },
  { ticker: "LAZR", expirationDay: "FRI" },
  { ticker: "LCID", expirationDay: "FRI" },
  { ticker: "LEN", expirationDay: "FRI" },
  { ticker: "LI", expirationDay: "FRI" },
  { ticker: "LII", expirationDay: "FRI" },
  { ticker: "LIN", expirationDay: "FRI" },
  { ticker: "LLY", expirationDay: "FRI" },
  { ticker: "LMND", expirationDay: "FRI" },
  { ticker: "LMT", expirationDay: "FRI" },
  { ticker: "LNG", expirationDay: "FRI" },
  { ticker: "LOW", expirationDay: "FRI" },
  { ticker: "LRCX", expirationDay: "FRI" },
  { ticker: "LULU", expirationDay: "FRI" },
  { ticker: "LUMN", expirationDay: "FRI" },
  { ticker: "LUNR", expirationDay: "FRI" },
  { ticker: "LUV", expirationDay: "FRI" },
  { ticker: "LVS", expirationDay: "FRI" },
  { ticker: "LYFT", expirationDay: "FRI" },
  { ticker: "M", expirationDay: "FRI" },
  { ticker: "MA", expirationDay: "FRI" },
  { ticker: "MANU", expirationDay: "FRI" },
  { ticker: "MAR", expirationDay: "FRI" },
  { ticker: "MARA", expirationDay: "FRI" },
  { ticker: "MCD", expirationDay: "FRI" },
  { ticker: "MCK", expirationDay: "FRI" },
  { ticker: "MDB", expirationDay: "FRI" },
  { ticker: "MDLZ", expirationDay: "FRI" },
  { ticker: "MDT", expirationDay: "FRI" },
  { ticker: "MELI", expirationDay: "FRI" },
  { ticker: "MET", expirationDay: "FRI" },
  { ticker: "META", expirationDay: "FRI" },
  { ticker: "MGM", expirationDay: "FRI" },
  { ticker: "MLCO", expirationDay: "FRI" },
  { ticker: "MMM", expirationDay: "FRI" },
  { ticker: "MNKD", expirationDay: "FRI" },
  { ticker: "MO", expirationDay: "FRI" },
  { ticker: "MOS", expirationDay: "FRI" },
  { ticker: "MPC", expirationDay: "FRI" },
  { ticker: "MPW", expirationDay: "FRI" },
  { ticker: "MRK", expirationDay: "FRI" },
  { ticker: "MRNA", expirationDay: "FRI" },
  { ticker: "MRO", expirationDay: "FRI" },
  { ticker: "MRVL", expirationDay: "FRI" },
  { ticker: "MS", expirationDay: "FRI" },
  { ticker: "MSFT", expirationDay: "FRI" },
  { ticker: "MSTR", expirationDay: "FRI" },
  { ticker: "MT", expirationDay: "FRI" },
  { ticker: "MTCH", expirationDay: "FRI" },
  { ticker: "MU", expirationDay: "FRI" },
  { ticker: "MVIS", expirationDay: "FRI" },
  { ticker: "NCLH", expirationDay: "FRI" },
  { ticker: "NEE", expirationDay: "FRI" },
  { ticker: "NEGG", expirationDay: "FRI" },
  { ticker: "NEM", expirationDay: "FRI" },
  { ticker: "NEP", expirationDay: "FRI" },
  { ticker: "NET", expirationDay: "FRI" },
  { ticker: "NFLX", expirationDay: "FRI" },
  { ticker: "NIO", expirationDay: "FRI" },
  { ticker: "NKE", expirationDay: "FRI" },
  { ticker: "NKLA", expirationDay: "FRI" },
  { ticker: "NLY", expirationDay: "FRI" },
  { ticker: "NNDM", expirationDay: "FRI" },
  { ticker: "NOC", expirationDay: "FRI" },
  { ticker: "NOK", expirationDay: "FRI" },
  { ticker: "NOW", expirationDay: "FRI" },
  { ticker: "NSC", expirationDay: "FRI" },
  { ticker: "NTAP", expirationDay: "FRI" },
  { ticker: "NTES", expirationDay: "FRI" },
  { ticker: "NTR", expirationDay: "FRI" },
  { ticker: "NU", expirationDay: "FRI" },
  { ticker: "NUE", expirationDay: "FRI" },
  { ticker: "NVAX", expirationDay: "FRI" },
  { ticker: "NVDA", expirationDay: "FRI" },
  { ticker: "NVO", expirationDay: "FRI" },
  { ticker: "NXPI", expirationDay: "FRI" },
  { ticker: "NYCB", expirationDay: "FRI" },
  { ticker: "OKLO", expirationDay: "FRI" },
  { ticker: "OKTA", expirationDay: "FRI" },
  { ticker: "ON", expirationDay: "FRI" },
  { ticker: "ONON", expirationDay: "FRI" },
  { ticker: "OPEN", expirationDay: "FRI" },
  { ticker: "ORCL", expirationDay: "FRI" },
  { ticker: "OXY", expirationDay: "FRI" },
  { ticker: "OZK", expirationDay: "FRI" },
  { ticker: "PAA", expirationDay: "FRI" },
  { ticker: "PAAS", expirationDay: "FRI" },
  { ticker: "PANW", expirationDay: "FRI" },
  { ticker: "PARA", expirationDay: "FRI" },
  { ticker: "PATH", expirationDay: "FRI" },
  { ticker: "PBR", expirationDay: "FRI" },
  { ticker: "PCG", expirationDay: "FRI" },
  { ticker: "PCT", expirationDay: "FRI" },
  { ticker: "PDD", expirationDay: "FRI" },
  { ticker: "PENN", expirationDay: "FRI" },
  { ticker: "PEP", expirationDay: "FRI" },
  { ticker: "PFE", expirationDay: "FRI" },
  { ticker: "PG", expirationDay: "FRI" },
  { ticker: "PHM", expirationDay: "FRI" },
  { ticker: "PINS", expirationDay: "FRI" },
  { ticker: "PLCE", expirationDay: "FRI" },
  { ticker: "PLTR", expirationDay: "FRI" },
  { ticker: "PLUG", expirationDay: "FRI" },
  { ticker: "PM", expirationDay: "FRI" },
  { ticker: "PNC", expirationDay: "FRI" },
  { ticker: "PPG", expirationDay: "FRI" },
  { ticker: "PSX", expirationDay: "FRI" },
  { ticker: "PTON", expirationDay: "FRI" },
  { ticker: "PYPL", expirationDay: "FRI" },
  { ticker: "QCOM", expirationDay: "FRI" },
  { ticker: "QS", expirationDay: "FRI" },
  { ticker: "RACE", expirationDay: "FRI" },
  { ticker: "RBLX", expirationDay: "FRI" },
  { ticker: "RCL", expirationDay: "FRI" },
  { ticker: "RDDT", expirationDay: "FRI" },
  { ticker: "RDFN", expirationDay: "FRI" },
  { ticker: "RDW", expirationDay: "FRI" },
  { ticker: "REGN", expirationDay: "FRI" },
  { ticker: "RH", expirationDay: "FRI" },
  { ticker: "RIG", expirationDay: "FRI" },
  { ticker: "RILY", expirationDay: "FRI" },
  { ticker: "RIOT", expirationDay: "FRI" },
  { ticker: "RIVN", expirationDay: "FRI" },
  { ticker: "RKLB", expirationDay: "FRI" },
  { ticker: "RKT", expirationDay: "FRI" },
  { ticker: "RNG", expirationDay: "FRI" },
  { ticker: "ROKU", expirationDay: "FRI" },
  { ticker: "ROST", expirationDay: "FRI" },
  { ticker: "RTX", expirationDay: "FRI" },
  { ticker: "RUM", expirationDay: "FRI" },
  { ticker: "RUN", expirationDay: "FRI" },
  { ticker: "S", expirationDay: "FRI" },
  { ticker: "SAVA", expirationDay: "FRI" },
  { ticker: "SAVE", expirationDay: "FRI" },
  { ticker: "SBUX", expirationDay: "FRI" },
  { ticker: "SCHW", expirationDay: "FRI" },
  { ticker: "SE", expirationDay: "FRI" },
  { ticker: "SEDG", expirationDay: "FRI" },
  { ticker: "SFIX", expirationDay: "FRI" },
  { ticker: "SHAK", expirationDay: "FRI" },
  { ticker: "SHEL", expirationDay: "FRI" },
  { ticker: "SHOP", expirationDay: "FRI" },
  { ticker: "SHOT", expirationDay: "FRI" },
  { ticker: "SIG", expirationDay: "FRI" },
  { ticker: "SIRI", expirationDay: "FRI" },
  { ticker: "SLB", expirationDay: "FRI" },
  { ticker: "SMCI", expirationDay: "FRI" },
  { ticker: "SNAP", expirationDay: "FRI" },
  { ticker: "SNDL", expirationDay: "FRI" },
  { ticker: "SNOW", expirationDay: "FRI" },
  { ticker: "SNV", expirationDay: "FRI" },
  { ticker: "SO", expirationDay: "FRI" },
  { ticker: "SOFI", expirationDay: "FRI" },
  { ticker: "SONY", expirationDay: "FRI" },
  { ticker: "SOUN", expirationDay: "FRI" },
  { ticker: "SPCE", expirationDay: "FRI" },
  { ticker: "SPGI", expirationDay: "FRI" },
  { ticker: "SPHR", expirationDay: "FRI" },
  { ticker: "SPOT", expirationDay: "FRI" },
  { ticker: "SPR", expirationDay: "FRI" },
  { ticker: "SPWR", expirationDay: "FRI" },
  { ticker: "SQ", expirationDay: "FRI" },
  { ticker: "SRPT", expirationDay: "FRI" },
  { ticker: "STNE", expirationDay: "FRI" },
  { ticker: "STNG", expirationDay: "FRI" },
  { ticker: "STX", expirationDay: "FRI" },
  { ticker: "STZ", expirationDay: "FRI" },
  { ticker: "SU", expirationDay: "FRI" },
  { ticker: "SWKS", expirationDay: "FRI" },
  { ticker: "SWN", expirationDay: "FRI" },
  { ticker: "SYM", expirationDay: "FRI" },
  { ticker: "T", expirationDay: "FRI" },
  { ticker: "TAL", expirationDay: "FRI" },
  { ticker: "TDOC", expirationDay: "FRI" },
  { ticker: "TEAM", expirationDay: "FRI" },
  { ticker: "TECK", expirationDay: "FRI" },
  { ticker: "TELL", expirationDay: "FRI" },
  { ticker: "TEVA", expirationDay: "FRI" },
  { ticker: "TFC", expirationDay: "FRI" },
  { ticker: "TGT", expirationDay: "FRI" },
  { ticker: "TGTX", expirationDay: "FRI" },
  { ticker: "TJX", expirationDay: "FRI" },
  { ticker: "TLRY", expirationDay: "FRI" },
  { ticker: "TMO", expirationDay: "FRI" },
  { ticker: "TMUS", expirationDay: "FRI" },
  { ticker: "TOL", expirationDay: "FRI" },
  { ticker: "TOST", expirationDay: "FRI" },
  { ticker: "TPR", expirationDay: "FRI" },
  { ticker: "TRIP", expirationDay: "FRI" },
  { ticker: "TSCO", expirationDay: "FRI" },
  { ticker: "TSLA", expirationDay: "FRI" },
  { ticker: "TSM", expirationDay: "FRI" },
  { ticker: "TSN", expirationDay: "FRI" },
  { ticker: "TTD", expirationDay: "FRI" },
  { ticker: "TTWO", expirationDay: "FRI" },
  { ticker: "TUP", expirationDay: "FRI" },
  { ticker: "TWLO", expirationDay: "FRI" },
  { ticker: "TXN", expirationDay: "FRI" },
  { ticker: "U", expirationDay: "FRI" },
  { ticker: "UAA", expirationDay: "FRI" },
  { ticker: "UAL", expirationDay: "FRI" },
  { ticker: "UBER", expirationDay: "FRI" },
  { ticker: "UEC", expirationDay: "FRI" },
  { ticker: "ULTA", expirationDay: "FRI" },
  { ticker: "UNH", expirationDay: "FRI" },
  { ticker: "UNP", expirationDay: "FRI" },
  { ticker: "UPS", expirationDay: "FRI" },
  { ticker: "UPST", expirationDay: "FRI" },
  { ticker: "URBN", expirationDay: "FRI" },
  { ticker: "URI", expirationDay: "FRI" },
  { ticker: "USB", expirationDay: "FRI" },
  { ticker: "UWMC", expirationDay: "FRI" },
  { ticker: "V", expirationDay: "FRI" },
  { ticker: "VALE", expirationDay: "FRI" },
  { ticker: "VERU", expirationDay: "FRI" },
  { ticker: "VFC", expirationDay: "FRI" },
  { ticker: "VFS", expirationDay: "FRI" },
  { ticker: "VKTX", expirationDay: "FRI" },
  { ticker: "VLO", expirationDay: "FRI" },
  { ticker: "VOD", expirationDay: "FRI" },
  { ticker: "VRT", expirationDay: "FRI" },
  { ticker: "VRTX", expirationDay: "FRI" },
  { ticker: "VZ", expirationDay: "FRI" },
  { ticker: "W", expirationDay: "FRI" },
  { ticker: "WAL", expirationDay: "FRI" },
  { ticker: "WB", expirationDay: "FRI" },
  { ticker: "WBA", expirationDay: "FRI" },
  { ticker: "WBD", expirationDay: "FRI" },
  { ticker: "WDAY", expirationDay: "FRI" },
  { ticker: "WDC", expirationDay: "FRI" },
  { ticker: "WFC", expirationDay: "FRI" },
  { ticker: "WHR", expirationDay: "FRI" },
  { ticker: "WKHS", expirationDay: "FRI" },
  { ticker: "WM", expirationDay: "FRI" },
  { ticker: "WMB", expirationDay: "FRI" },
  { ticker: "WMT", expirationDay: "FRI" },
  { ticker: "WOLF", expirationDay: "FRI" },
  { ticker: "WPM", expirationDay: "FRI" },
  { ticker: "WULF", expirationDay: "FRI" },
  { ticker: "WW", expirationDay: "FRI" },
  { ticker: "WYNN", expirationDay: "FRI" },
  { ticker: "X", expirationDay: "FRI" },
  { ticker: "XOM", expirationDay: "FRI" },
  { ticker: "XP", expirationDay: "FRI" },
  { ticker: "XPEV", expirationDay: "FRI" },
  { ticker: "YPF", expirationDay: "FRI" },
  { ticker: "Z", expirationDay: "FRI" },
  { ticker: "ZI", expirationDay: "FRI" },
  { ticker: "ZIM", expirationDay: "FRI" },
  { ticker: "ZION", expirationDay: "FRI" },
  { ticker: "ZM", expirationDay: "FRI" },
  { ticker: "ZS", expirationDay: "FRI" },
];

module.exports = { weeklyStockOptions };
