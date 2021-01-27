// Login even handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display="block";
    })
    // Deposit event handler
    const depositBtn = document.getElementById("addAmount");
    depositBtn.addEventListener("click",function(){
        // const depositAmount = document.getElementById("depositAmount").value;
        // const depositNumber = parseFloat(depositAmount);
        const depositNumber = getInputNumber("depositAmount");

        // const currentDeposit = document.getElementById("currentDeposit").innerText;
        // const currentDepositNumber = parseFloat(currentDeposit);
        // const total = depositNumber + currentDepositNumber;
        // document.getElementById("currentDeposit").innerText = total;

        // const currentBalance = document.getElementById("currentBalance").innerText;
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance = depositNumber + currentBalanceNumber;
        // document.getElementById("currentBalance").innerText =totalBalance;

        updateSpan("currentBalance",depositNumber);
        updateSpan("currentDeposit",depositNumber)
        document.getElementById("depositAmount").value='';
       
    })
    // Withdraw event handler
    const withdrawBtn = document.getElementById("addWithdarw");
    withdrawBtn.addEventListener("click",function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateSpan("currentWithdraw",withdrawNumber);
        updateSpan("currentBalance",-1 * withdrawNumber);
        document.getElementById("withdrawAmount").value='';
    })

    function getInputNumber(id){
        const withdrawAmount = document.getElementById(id).value;
        const withdrawNumber = parseFloat(withdrawAmount);
        return withdrawNumber;

    }




    function updateSpan ( id ,depositNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depositNumber + currentNumber;
        document.getElementById(id).innerText =total;
    }