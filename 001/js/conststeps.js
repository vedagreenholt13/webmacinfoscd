$('body').on('click', function () {
    const steps = [
        {
            id: "step1",
            status: "All resolved",
            type: "completed"
        },
        {
            id: "step2",
            status: "Issues found",
            type: "error"
        },
        {
            id: "step3",
            status: "Issues found",
            type: "error"
        },
        {
            id: "step4",
            status: "Issues found",
            type: "error"
        }
    ];


    const progress = document.getElementById("progress");


    function runStep(index) {

        if (index >= steps.length) {

            // Show final message
            setTimeout(function () {
                document
                    .getElementById("result")
                    .classList.add("show");
            }, 500);

            return;
        }


        const data = steps[index];

        const step = document.getElementById(data.id);

        const status = step.querySelector(".step-status");


        /* Highlight current step */
        step.classList.add("active");
        step.classList.add("highlight");


        /* Change status */
        if (data.type === "completed") {

            status.innerHTML = data.status;
            step.classList.add("completed");

        } else {

            status.innerHTML = data.status;
            step.classList.add("error");

        }


        /* Animate progress line */
        if (index > 0) {

            const percentage =
                (index / (steps.length - 1)) * 100;

            progress.style.width = percentage + "%";
        }


        /* Remove highlight after animation */
        setTimeout(function () {

            step.classList.remove("active");

        }, 800);


        /* Next step */
        setTimeout(function () {

            step.classList.remove("highlight");

            runStep(index + 1);

        }, 1500);
    }


    /* Start animation */
    setTimeout(function () {
        runStep(0);
    }, 2000);

    });