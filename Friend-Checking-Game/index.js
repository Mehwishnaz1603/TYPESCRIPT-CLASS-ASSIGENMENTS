import inquirer from "inquirer";
let isFriend = await inquirer.prompt([{
        name: "Friendname", type: "string", message: "Enter your Friend name:",
    }]);
if (isFriend.Friendname === "Mehwishnaz" || isFriend.Friendname === "Noorulain") {
    console.log(` ${isFriend.Friendname} is your Friend`);
}
else {
    console.log(` ${isFriend.Friendname} is not your Friend`);
}
