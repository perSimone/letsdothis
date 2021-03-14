<!DOCTYPE html>
<html lang="en">

<head>
    <title>playground</title>
    <?php include "./head.html" ?>
    <link rel="stylesheet" type="text/css" href="playground.css" />
</head>

<body class="playground">
    <?php include "./header.html" ?>
    <?php include "./nav-menu.html" ?>
    <main>
        <div class="content">
            <h1>This will be my playground</h1>
            <p>Check out some funny little code projects below. Try hover on the cactus and toggle the button.</p>
            <section>
                <article>
                    <div class="cactus">
                        <div class="plant-left plant"></div>
                        <div class="plant-right plant"></div>
                        <div id="pot"></div>
                        <div class="face">
                            <div class="eye-left eye"></div>
                            <div class="eye-right eye"></div>
                            <div class="mouth"></div>
                        </div>
                    </div>
                </article>

                <article>
                    <label for="check">
                        <input type="checkbox" id="check" class="check">
                        <span class="btn"></span>
                    </label>
                </article>

                <article>
                    <div class="frame">
                        <div class="floor"></div>
                        <div class="ballMove">
                            <div class="ballUp">
                                <div class="ballDown">
                                    <div class="ball"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="underline-container">
                        <h2>This is, a one line title</h2>
                    </div>
                    <br>
                    <br>
                    <div class="underline-container">
                        <h2>This is,<br> another title</h2>
                    </div>
                </article>
            </section>
        </div>
    </main>
    <?php include "./footer.html" ?>
    <?php include "./scripts.html" ?>
</body>

</html>