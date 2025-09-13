// Project 1: Arithmetic Operators Project - "Personal Finance Calculator" //
  // Monthly Financial Data
let monthlySalary = 5000;
let freelanceIncome = 800;
let investmentReturns = 150;

// Fixed Expenses
let rent = 1200;
let utilities = 200;
let groceries = 400;
let transportation = 300;
let insurance = 150;

// Variable Expenses
let entertainment = 250;
let diningOut = 180;
let shopping = 220;
let miscellaneous = 100;

// Savings and Investments
let emergencyFundTarget = 15000;
let currentEmergencyFund = 8500;
let monthlyInvestment = 500;
let retirementContribution = 600;

// ---------------- CALCULATIONS ----------------

// 1. Total monthly income
let totalIncome = monthlySalary + freelanceIncome + investmentReturns;

// 2. Total fixed expenses
let totalFixedExpenses = rent + utilities + groceries + transportation + insurance;

// 3. Total variable expenses
let totalVariableExpenses = entertainment + diningOut + shopping + miscellaneous;

// 4. Monthly savings potential
let monthlySavingsPotential = totalIncome - (totalFixedExpenses + totalVariableExpenses + monthlyInvestment + retirementContribution);

// 5. Emergency fund gap
let emergencyFundGap = emergencyFundTarget - currentEmergencyFund;

// 6. Annual investment total
let annualInvestment = (monthlyInvestment + retirementContribution) * 12;

// 7. Percentage breakdown of expenses (fixed, variable, savings)
let totalExpenses = totalFixedExpenses + totalVariableExpenses;
let percentFixed = (totalFixedExpenses * 100) / totalIncome;
let percentVariable = (totalVariableExpenses * 100) / totalIncome;
let percentSavings = (monthlySavingsPotential * 100) / totalIncome;

// 8. Years to reach emergency fund target
let yearlyEmergencySavings = monthlySavingsPotential * 12;
let yearsToReachEmergencyFund = emergencyFundGap / yearlyEmergencySavings;

// 9. Daily spending allowance
let dailyAllowance = monthlySavingsPotential / 30;

// 10. Hourly wage equivalent
let hourlyWage = totalIncome / (30 * 8); // assuming 8 working hours per day

// ---------------- OUTPUT ----------------
console.log("💰 Total Monthly Income:", totalIncome);
console.log("🏠 Total Fixed Expenses:", totalFixedExpenses);
console.log("🛍️ Total Variable Expenses:", totalVariableExpenses);
console.log("📊 Monthly Savings Potential:", monthlySavingsPotential);
console.log("🚨 Emergency Fund Gap:", emergencyFundGap);
console.log("📈 Annual Investment Total:", annualInvestment);
console.log("📌 Expense Breakdown: Fixed =", percentFixed.toFixed(2) + "%, Variable =", percentVariable.toFixed(2) + "%, Savings =", percentSavings.toFixed(2) + "%");
console.log("⏳ Years to Reach Emergency Fund Target:", yearsToReachEmergencyFund.toFixed(1));
console.log("🗓️ Daily Spending Allowance:", dailyAllowance.toFixed(2));
console.log("⏱️ Hourly Wage Equivalent:", hourlyWage.toFixed(2));

// Project 2: Comparison Operators Project - "Student Performance AnalysisSystem"//

// Student Data
let mathScore = 87;
let scienceScore = 92;
let englishScore = 78;
let historyScore = 85;
let artScore = 94;

let classAverageMath = 82;
let classAverageScience = 88;
let classAverageEnglish = 80;
let classAverageHistory = 79;
let classAverageArt = 86;

// Performance Thresholds
let excellentThreshold = 90;
let goodThreshold = 80;
let averageThreshold = 70;
let passingThreshold = 60;

// Attendance and Behavior
let attendancePercentage = 96;
let behaviorRating = 8.5;
let homeworkCompletion = 94;

// Other Student Scores for Comparison
let peerScore1 = 88;
let peerScore2 = 79;
let peerScore3 = 91;
let peerScore4 = 83;

// ---------------- LOGIC ----------------

// 1. Subjects above class average
if (mathScore > classAverageMath) console.log("✅ Math above class average");
if (scienceScore > classAverageScience) console.log("✅ Science above class average");
if (englishScore > classAverageEnglish) console.log("✅ English above class average");
if (historyScore > classAverageHistory) console.log("✅ History above class average");
if (artScore > classAverageArt) console.log("✅ Art above class average");

// 2. Performance level for each subject
function checkPerformance(subject, score) {
  if (score >= excellentThreshold) {
    console.log(subject, " = Excellent");
  } else if (score >= goodThreshold) {
    console.log(subject, " = Good");
  } else if (score >= averageThreshold) {
    console.log(subject, " = Average");
  } else if (score >= passingThreshold) {
    console.log(subject, " = Passing");
  } else {
    console.log(subject, " = Needs urgent improvement");
  }
}

checkPerformance("Math", mathScore);
checkPerformance("Science", scienceScore);
checkPerformance("English", englishScore);
checkPerformance("History", historyScore);
checkPerformance("Art", artScore);

// 3. Ranking compared to peers
if (mathScore > peerScore1 && mathScore > peerScore2 && mathScore > peerScore3 && mathScore > peerScore4) {
  console.log("🏆 Student ranked highest among peers");
} else if (mathScore < peerScore1 && mathScore < peerScore2 && mathScore < peerScore3 && mathScore < peerScore4) {
  console.log("📉 Student ranked lowest among peers");
} else {
  console.log("⚖️ Student is in the middle ranking");
}

// 4. Eligibility for honor roll (attendance + behavior + grades)
if (attendancePercentage >= 90 && behaviorRating >= 8 && homeworkCompletion >= 90 && 
    mathScore >= goodThreshold && scienceScore >= goodThreshold && englishScore >= goodThreshold) {
  console.log("🌟 Eligible for Honor Roll");
} else {
  console.log("❌ Not Eligible for Honor Roll");
}

// 5. Subjects needing improvement
if (mathScore < goodThreshold) console.log("📚 Improve Math");
if (scienceScore < goodThreshold) console.log("📚 Improve Science");
if (englishScore < goodThreshold) console.log("📚 Improve English");
if (historyScore < goodThreshold) console.log("📚 Improve History");
if (artScore < goodThreshold) console.log("📚 Improve Art");

// 6. Overall academic standing
if (mathScore >= goodThreshold && scienceScore >= goodThreshold && historyScore >= goodThreshold && artScore >= goodThreshold) {
  console.log("📊 Overall Standing: Strong");
} else if (englishScore >= averageThreshold) {
  console.log("📊 Overall Standing: Moderate");
} else {
  console.log("📊 Overall Standing: Weak");
}

// 7. Comparison with school standards (passing check)
if (mathScore >= passingThreshold && scienceScore >= passingThreshold && englishScore >= passingThreshold && historyScore >= passingThreshold && artScore >= passingThreshold) {
  console.log("✅ Meets School Standards");
} else {
  console.log("❌ Does Not Meet School Standards");
}

// 8. Progress indicators
if (mathScore > classAverageMath) console.log("📈 Math progress is positive");
if (scienceScore > classAverageScience) console.log("📈 Science progress is positive");
if (englishScore < classAverageEnglish) console.log("📉 English progress needs work");
if (historyScore > classAverageHistory) console.log("📈 History progress is positive");
if (artScore > classAverageArt) console.log("📈 Art progress is positive");
//Project 3: Logical Operators Project - "Smart Home Automation System"//

// Time and Environmental Data
let currentHour = 19;
let dayOfWeek = 5; // 1=Monday, 7=Sunday
let isWeekend = false;
let outsideTemperature = 72;
let insideTemperature = 75;
let humidity = 45;
let lightLevel = 20; // percentage

// Occupancy and Security
let isAnyoneHome = true;
let isOwnerHome = true;
let isGuestHome = false;
let motionInLivingRoom = false;
let motionInBedroom = true;
let frontDoorLocked = true;
let backDoorLocked = false;
let windowsOpen = false;

// System States
let heatingSystemOn = false;
let coolingSystemOn = true;
let lightsOn = true;
let securitySystemArmed = false;
let musicSystemOn = false;
let tvOn = false;

// Preferences and Modes
let energySavingMode = true;
let partyMode = false;
let sleepMode = false;
let vacationMode = false;
let guestMode = false;

// Weather and External Factors
let isRaining = false;
let isWindy = false;
let isSunny = true;
let airQualityGood = true;

// 1. Lighting automation (turn ON if dark + someone home)
lightsOn = (lightLevel < 30 && isAnyoneHome) || partyMode;

// 2. Climate control decisions
heatingSystemOn = (insideTemperature < 68) && !coolingSystemOn;
coolingSystemOn = (insideTemperature > 74) && !heatingSystemOn;

// 3. Security system activation
securitySystemArmed = (!isAnyoneHome && !guestMode) || vacationMode;

// 4. Entertainment system control
tvOn = (isOwnerHome && !sleepMode && !energySavingMode) || partyMode;
musicSystemOn = (partyMode && isAnyoneHome) || (isGuestHome && !sleepMode);

// 5. Energy saving protocols
energySavingMode = (insideTemperature >= 70 && insideTemperature <= 75) 
                   && (lightLevel > 50 || !isAnyoneHome);

// 6. Guest accommodation settings
guestMode = isGuestHome && isOwnerHome && !vacationMode;

// 7. Weather-based adjustments
windowsOpen = (!isRaining && !isWindy && airQualityGood) && insideTemperature > 72;

// 8. Night mode activation
sleepMode = (currentHour >= 22 || currentHour < 6) && isOwnerHome && !partyMode;

// 9. Vacation security measures
vacationMode = !isOwnerHome && !isGuestHome && isWeekend;

// 10. Emergency protocols (example: unlock doors if motion + fire/hazard)
let fireDetected = false;
let gasLeakDetected = false;
let emergencyMode = fireDetected || gasLeakDetected;
frontDoorLocked = !emergencyMode;
backDoorLocked = !emergencyMode;

// Output current system states
console.log("💡 Lights On:", lightsOn);
console.log("🔥 Heating On:", heatingSystemOn);
console.log("❄️ Cooling On:", coolingSystemOn);
console.log("🔒 Security Armed:", securitySystemArmed);
console.log("📺 TV On:", tvOn);
console.log("🎵 Music On:", musicSystemOn);
console.log("🌱 Energy Saving Mode:", energySavingMode);
console.log("👥 Guest Mode:", guestMode);
console.log("🪟 Windows Open:", windowsOpen);
console.log("😴 Sleep Mode:", sleepMode);
console.log("✈️ Vacation Mode:", vacationMode);
console.log("🚨 Emergency Mode:", emergencyMode);

// Project 4: Combined Operators Project - "E-commerce Order ProcessingSystem" //

let itemPrice = 300;
let quantity = 3;
let stock = 50;
let isVip = true;
let couponDiscount = 20;
let shippingCost = 50;

// 1. Subtotal
let subtotal = itemPrice * quantity;
console.log("Subtotal:", subtotal);

// 2. Bulk Discount
if (quantity >= 5) {
    subtotal = subtotal - (subtotal * 0.1);
}
console.log("After Bulk Discount:", subtotal);

// 3. Customer Eligibility
let eligible = (isVip && stock > 0);
console.log("Eligible:", eligible);

// 4. Shipping
shippingCost = (subtotal >= 500) ? 0 : shippingCost;
console.log("Shipping Cost:", shippingCost);

// 5. Coupon Discount
if (couponDiscount > 0) {
    subtotal = subtotal - (subtotal * (couponDiscount / 100));
}
console.log("After Coupon:", subtotal);

// 6. Delivery Time
let deliveryDays = (shippingCost === 0) ? 2 : 5;
console.log("Delivery Days:", deliveryDays);

// 7. Final Total
let tax = subtotal * 0.1;
let finalTotal = subtotal + shippingCost + tax;
console.log("Final Total:", finalTotal);

// 8. Order Status
let status = (eligible && stock >= quantity) ? "Confirmed" : "Pending";
console.log("Order Status:", status);

// 9. Inventory
stock = stock - quantity;
console.log("Remaining Stock:", stock);
 
// 10. Notification
let notify = (status === "Confirmed") ? "Send Email + SMS" : "Send Email";
console.log("Notification:", notify);

// Project 5: Advanced Mixed Operators Project - "Hospital Patient ManagementSystem"//

// Patient Info
let patientAge = 45;
let weight = 78.5; // kg
let height = 175; // cm
let temperature = 38.5;
let bloodPressureSystolic = 145;
let bloodPressureDiastolic = 95;
let heartRate = 88;
let oxygenSaturation = 97;

// Hospital + Treatment
let availableBeds = 12;
let icuBeds = 3;
let staffOnDuty = 15;
let treatmentCost = 2500;
let medicationCost = 450;
let roomChargePerDay = 300;
let estimatedStayDays = 3;
let insuranceCoverage = 80;

// Other conditions
let isEmergency = false;
let triageCategory = "urgent";
let requiresSurgery = false;
let needsSpecialist = true;
let dischargeCriteriaMet = false;

// ------------------------------
// 1. BMI
let bmi = weight / ((height / 100) ** 2);
console.log("1) BMI:", bmi.toFixed(1));

// 2. Admission Priority
let highFever = temperature > 38;
let highBP = bloodPressureSystolic > 140 || bloodPressureDiastolic > 90;
let priority = (isEmergency || triageCategory === "immediate" || highFever || highBP) ? "High" : "Normal";
console.log("2) Admission Priority:", priority);

// 3. Room Assignment
let room = (icuBeds > 0 && (isEmergency || highBP)) ? "ICU"
    : (availableBeds > 0) ? "General Ward"
        : "Waiting List";
console.log("3) Room Assigned:", room);

// 4. Treatment Costs
let totalTreatment = treatmentCost + medicationCost;
if (requiresSurgery) totalTreatment += 5000;
console.log("4) Treatment Cost:", totalTreatment);

// 5. Medication Dosage (example: paracetamol 15mg/kg)
let dosage = weight * 15;
console.log("5) Dosage (mg):", dosage);

// 6. Staff Assignment
let staffAssigned = (needsSpecialist && staffOnDuty > 5) ? "Specialist Assigned"
    : (staffOnDuty > 0) ? "General Staff Assigned"
        : "No Staff Available";
console.log("6) Staff:", staffAssigned);

// 7. Discharge Plan
let discharge = dischargeCriteriaMet ? "Discharge Approved" : "Continue Monitoring";
console.log("7) Discharge Plan:", discharge);

// 8. Billing + Insurance
let roomCharge = roomChargePerDay * estimatedStayDays;
let grossBill = totalTreatment + roomCharge;
let insurancePay = (insuranceCoverage / 100) * grossBill;
let finalBill = grossBill - insurancePay;
console.log("8) Final Bill after Insurance:", finalBill);

// 9. Emergency Protocols
let emergencyAction = (isEmergency || oxygenSaturation < 90 || heartRate > 120) ? "Activate Emergency Response" : "Standard Care";
console.log("9) Emergency Protocol:", emergencyAction);

// 10. Resource Allocation
let resourcesOk = (availableBeds + icuBeds > 0) && staffOnDuty > 0;
console.log("10) Resources Available:", resourcesOk);