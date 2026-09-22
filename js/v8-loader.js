<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Elaine Maidana — Furo Humanizado. Atendimento domiciliar para bebês, crianças e adultos em Porto Alegre e Canoas."
    >

    <meta
        name="theme-color"
        content="#FFD6E0"
    >

    <title>
        Elaine Maidana | Furo Humanizado
    </title>

    <style>

        /* =========================================================
           RESET
        ========================================================= */

        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family:
                Arial,
                Helvetica,
                sans-serif;

            background: #fffafb;
            color: #514448;
            line-height: 1.6;

            overflow-x: hidden;
        }

        img {
            display: block;
            max-width: 100%;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        button,
        input,
        textarea {
            font: inherit;
        }

        :root {
            --pink: #FFD6E0;
            --pink-light: #FFF1F4;
            --pink-soft: #FFF8FA;
            --pink-dark: #D98B9F;
            --pink-deep: #C8758B;

            --gold: #C9A86A;
            --gold-light: #E9D8B5;

            --white: #FFFFFF;

            --text: #514448;
            --text-dark: #3F3438;
            --muted: #817276;

            --border: #F0DDE3;

            --green: #25D366;

            --max-width: 1180px;

            --shadow:
                0 20px 60px
                rgba(120, 70, 85, .10);
        }


        /* =========================================================
           GLOBAL
        ========================================================= */

        .container {
            width: min(
                calc(100% - 40px),
                var(--max-width)
            );

            margin-inline: auto;
        }

        section {
            padding: 100px 0;
        }

        .section-label {
            display: inline-block;

            margin-bottom: 14px;

            color: var(--gold);

            font-size: 12px;
            font-weight: 800;

            letter-spacing: .16em;
            text-transform: uppercase;
        }

        .section-title {
            font-family:
                Georgia,
                "Times New Roman",
                serif;

            color: var(--text-dark);

            font-size:
                clamp(34px, 5vw, 54px);

            line-height: 1.08;
            font-weight: 500;
            letter-spacing: -.035em;
        }

        .section-description {
            max-width: 680px;

            margin-top: 18px;

            color: var(--muted);

            font-size: 17px;
        }

        .center-heading {
            max-width: 720px;

            margin: 0 auto 55px;

            text-align: center;
        }

        .center-heading .section-description {
            margin-inline: auto;
        }


        /* =========================================================
           HEADER
        ========================================================= */

        .site-header {
            position: absolute;

            top: 0;
            left: 0;
            right: 0;

            z-index: 20;
        }

        .nav {
            min-height: 82px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 25px;
        }

        .brand {
            display: flex;
            align-items: center;

            gap: 12px;
        }

        .brand-mark {
            width: 46px;
            height: 46px;

            display: grid;
            place-items: center;

            border-radius: 50%;

            background:
                linear-gradient(
                    145deg,
                    #FFFFFF,
                    var(--pink)
                );

            border:
                1px solid
                rgba(201,168,106,.35);

            color: var(--gold);

            font-family: Georgia, serif;
            font-size: 22px;

            box-shadow:
                0 8px 25px
                rgba(120,70,85,.08);
        }

        .brand-name {
            display: block;

            color: var(--text-dark);

            font-family: Georgia, serif;
            font-size: 18px;
            font-weight: 500;
        }

        .brand-subtitle {
            display: block;

            margin-top: -2px;

            color: var(--gold);

            font-size: 9px;
            font-weight: 700;

            letter-spacing: .14em;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            align-items: center;

            gap: 26px;

            color: #6B5C61;

            font-size: 14px;
        }

        .nav-links a {
            transition: color .2s ease;
        }

        .nav-links a:hover {
            color: var(--pink-deep);
        }

        .nav-instagram {
            padding: 10px 18px;

            border:
                1px solid
                var(--pink-dark);

            border-radius: 30px;

            color: var(--pink-deep);

            font-weight: 700;
        }


        /* =========================================================
           BUTTONS
        ========================================================= */

        .button {
            min-height: 54px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding:
                0 25px;

            border-radius: 30px;

            font-size: 14px;
            font-weight: 800;

            transition:
                transform .2s ease,
                box-shadow .2s ease;
        }

        .button:hover {
            transform: translateY(-2px);
        }

        .button-primary {
            color: #FFFFFF;

            background:
                linear-gradient(
                    135deg,
                    var(--pink-deep),
                    var(--pink-dark)
                );

            box-shadow:
                0 14px 35px
                rgba(216,137,157,.28);
        }

        .button-secondary {
            color: #685A5F;

            background: #FFFFFF;

            border:
                1px solid
                var(--border);
        }


        /* =========================================================
           HERO
        ========================================================= */

        .hero {
            min-height: 820px;

            display: flex;
            align-items: center;

            padding:
                150px 0
                100px;

            background:

                radial-gradient(
                    circle at 87% 25%,
                    rgba(255,214,224,.95),
                    transparent 31%
                ),

                radial-gradient(
                    circle at 10% 85%,
                    rgba(233,216,181,.18),
                    transparent 30%
                ),

                #FFFAFB;
        }

        .hero-grid {
            display: grid;

            grid-template-columns:
                1.05fr
                .95fr;

            align-items: center;

            gap: 75px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;

            gap: 8px;

            padding:
                8px 15px;

            border:
                1px solid
                var(--border);

            border-radius: 30px;

            background: #FFFFFF;

            color: var(--gold);

            font-size: 11px;
            font-weight: 800;

            letter-spacing: .1em;
            text-transform: uppercase;
        }

        .hero h1 {
            max-width: 760px;

            margin-top: 22px;

            color: var(--text-dark);

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            font-size:
                clamp(46px, 6vw, 76px);

            line-height: 1.01;
            font-weight: 500;

            letter-spacing: -.05em;
        }

        .hero h1 em {
            color: var(--pink-deep);
            font-style: normal;
        }

        .hero-text {
            max-width: 650px;

            margin-top: 25px;

            color: var(--muted);

            font-size: 18px;
        }

        .hero-actions {
            display: flex;
            flex-wrap: wrap;

            gap: 12px;

            margin-top: 32px;
        }

        .hero-note {
            margin-top: 18px;

            color: #9A898F;

            font-size: 13px;
        }

        .hero-visual {
            min-height: 510px;

            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-circle {
            width: min(440px, 90vw);
            aspect-ratio: 1;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background:
                linear-gradient(
                    145deg,
                    #FFFFFF,
                    #FFE7ED
                );

            border:
                1px solid
                rgba(201,168,106,.28);

            box-shadow: var(--shadow);
        }

        .hero-card {
            width: 72%;

            padding: 38px 30px;

            text-align: center;

            background:
                rgba(255,255,255,.94);

            border-radius: 28px;

            border:
                1px solid
                rgba(201,168,106,.18);

            box-shadow:
                0 18px 50px
                rgba(120,70,85,.09);
        }

        .hero-heart {
            width: 78px;
            height: 78px;

            display: grid;
            place-items: center;

            margin:
                0 auto 20px;

            border-radius: 50%;

            background:
                linear-gradient(
                    145deg,
                    var(--pink),
                    #FFFFFF
                );

            color: var(--pink-deep);

            font-family: Georgia, serif;
            font-size: 35px;
        }

        .hero-card h2 {
            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 28px;
            font-weight: 500;
        }

        .hero-card p {
            margin-top: 9px;

            color: var(--muted);

            font-size: 14px;
        }

        .hero-tag {
            display: inline-block;

            margin-top: 20px;

            padding:
                7px 13px;

            border-radius: 20px;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-size: 10px;
            font-weight: 800;

            letter-spacing: .06em;
            text-transform: uppercase;
        }


        /* =========================================================
           DIFFERENTIALS
        ========================================================= */

        .differentials {
            background: #FFFFFF;
        }

        .cards {
            display: grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap: 18px;
        }

        .card {
            padding: 30px 26px;

            background: #FFFFFF;

            border:
                1px solid
                var(--border);

            border-radius: 22px;

            box-shadow:
                0 8px 30px
                rgba(120,70,85,.045);

            transition:
                transform .2s ease,
                box-shadow .2s ease;
        }

        .card:hover {
            transform: translateY(-4px);

            box-shadow: var(--shadow);
        }

        .card-icon {
            width: 50px;
            height: 50px;

            display: grid;
            place-items: center;

            margin-bottom: 19px;

            border-radius: 15px;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-size: 21px;
        }

        .card h3 {
            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 21px;
            font-weight: 500;
        }

        .card p {
            margin-top: 9px;

            color: var(--muted);

            font-size: 14px;
        }


        /* =========================================================
           ABOUT
        ========================================================= */

        .about {
            background: var(--pink-soft);
        }

        .about-grid {
            display: grid;

            grid-template-columns:
                .9fr
                1.1fr;

            align-items: center;

            gap: 80px;
        }

        .about-visual {
            min-height: 460px;

            display: grid;
            place-items: center;

            padding: 35px;

            border-radius: 30px;

            background:
                linear-gradient(
                    145deg,
                    #FFE4EB,
                    #FFFFFF
                );

            border:
                1px solid
                var(--border);
        }

        .about-card {
            width: 100%;
            max-width: 350px;

            padding: 42px 30px;

            text-align: center;

            background: #FFFFFF;

            border-radius: 27px;

            box-shadow: var(--shadow);
        }

        .about-card-symbol {
            width: 80px;
            height: 80px;

            display: grid;
            place-items: center;

            margin:
                0 auto 20px;

            border-radius: 50%;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-family: Georgia, serif;

            font-size: 34px;
        }

        .about-card strong {
            display: block;

            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 27px;
            font-weight: 500;
        }

        .about-card span {
            display: block;

            margin-top: 5px;

            color: var(--gold);

            font-size: 11px;
            font-weight: 800;

            letter-spacing: .1em;
            text-transform: uppercase;
        }

        .about-content p {
            margin-top: 20px;

            color: var(--muted);

            font-size: 17px;
        }

        .about-list {
            display: grid;

            gap: 12px;

            margin-top: 27px;
        }

        .about-list-item {
            display: flex;
            align-items: flex-start;

            gap: 11px;

            color: #66575C;

            font-size: 14px;
        }

        .check {
            flex: 0 0 auto;

            width: 23px;
            height: 23px;

            display: grid;
            place-items: center;

            border-radius: 50%;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-size: 11px;
            font-weight: 800;
        }


        /* =========================================================
           SERVICES
        ========================================================= */

        .services {
            background: #FFFFFF;
        }

        .service-grid {
            display: grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap: 18px;
        }

        .service {
            min-height: 245px;

            padding: 29px 25px;

            border:
                1px solid
                var(--border);

            border-radius: 21px;

            background:
                linear-gradient(
                    145deg,
                    #FFFFFF,
                    #FFFAFB
                );
        }

        .service-number {
            color: var(--gold);

            font-size: 11px;
            font-weight: 800;

            letter-spacing: .12em;
        }

        .service h3 {
            margin-top: 18px;

            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 22px;
            font-weight: 500;
        }

        .service p {
            margin-top: 10px;

            color: var(--muted);

            font-size: 14px;
        }


        /* =========================================================
           TITÂNIO / BIOSSEGURANÇA
        ========================================================= */

        .safety {
            background: var(--pink-soft);
        }

        .safety-grid {
            display: grid;

            grid-template-columns:
                1fr
                1fr;

            gap: 25px;
        }

        .safety-card {
            padding: 38px;

            border-radius: 25px;

            background: #FFFFFF;

            border:
                1px solid
                var(--border);

            box-shadow:
                0 10px 40px
                rgba(120,70,85,.05);
        }

        .safety-card h3 {
            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 28px;
            font-weight: 500;
        }

        .safety-card p {
            margin-top: 13px;

            color: var(--muted);

            font-size: 15px;
        }

        .safety-points {
            display: grid;

            gap: 13px;

            margin-top: 23px;
        }

        .safety-point {
            display: flex;

            gap: 11px;

            color: #66575C;

            font-size: 14px;
        }

        .safety-point strong {
            color: var(--text-dark);
        }


        /* =========================================================
           JEWELRY
        ========================================================= */

        .jewelry {
            background: #FFFFFF;
        }

        .jewelry-grid {
            display: grid;

            grid-template-columns:
                repeat(5, 1fr);

            gap: 15px;
        }

        .jewel {
            aspect-ratio: 1;

            position: relative;

            display: flex;
            align-items: flex-end;

            padding: 18px;

            overflow: hidden;

            border-radius: 20px;

            background:
                linear-gradient(
                    145deg,
                    #FFFFFF,
                    #FCECEF
                );

            border:
                1px solid
                var(--border);
        }

        .jewel::before {
            content: "✦";

            position: absolute;

            top: 50%;
            left: 50%;

            transform:
                translate(-50%, -55%);

            color: var(--gold);

            font-family: Georgia, serif;

            font-size: 55px;

            opacity: .7;
        }

        .jewel span {
            position: relative;
            z-index: 2;

            color: #64555A;

            font-size: 12px;
            font-weight: 800;
        }


        /* =========================================================
           GALERIA — CONTROLADA PELO LOADER
        ========================================================= */

        .gallery {
            background: var(--pink-soft);
        }

        .v8-gallery {
            display: grid;

            grid-template-columns:
                repeat(3, 1fr);

            gap: 18px;
        }

        .v8-gallery-item {
            width: 100%;

            aspect-ratio: 1 / 1;

            object-fit: cover;

            border-radius: 22px;

            border:
                1px solid
                var(--border);

            box-shadow:
                0 8px 30px
                rgba(120,70,85,.07);
        }


        /* =========================================================
           PROCESS
        ========================================================= */

        .process {
            background: #FFFFFF;
        }

        .process-grid {
            display: grid;

            grid-template-columns:
                repeat(4, 1fr);

            gap: 20px;
        }

        .process-item {
            padding: 24px;

            text-align: center;
        }

        .process-number {
            width: 58px;
            height: 58px;

            display: grid;
            place-items: center;

            margin:
                0 auto 17px;

            border-radius: 50%;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-family: Georgia, serif;

            font-size: 21px;
        }

        .process-item h3 {
            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 21px;
            font-weight: 500;
        }

        .process-item p {
            margin-top: 8px;

            color: var(--muted);

            font-size: 14px;
        }


        /* =========================================================
           LOCATION
        ========================================================= */

        .location {
            background: var(--pink-soft);
        }

        .location-grid {
            display: grid;

            grid-template-columns:
                .75fr
                1.25fr;

            gap: 24px;
        }

        .location-card {
            padding: 38px;

            background: #FFFFFF;

            border:
                1px solid
                var(--border);

            border-radius: 25px;
        }

        .location-card h3 {
            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size: 29px;
            font-weight: 500;
        }

        .location-card p {
            margin-top: 15px;

            color: var(--muted);

            font-size: 15px;
        }

        .cities {
            display: flex;
            flex-wrap: wrap;

            gap: 8px;

            margin-top: 22px;
        }

        .city {
            padding:
                7px 12px;

            border-radius: 20px;

            background: var(--pink-light);

            color: var(--pink-deep);

            font-size: 11px;
            font-weight: 800;
        }

        .location-map {
            min-height: 370px;

            overflow: hidden;

            border-radius: 25px;

            background: #F8EEF1;

            border:
                1px solid
                var(--border);
        }

        .location-map [data-v8-maps-embed] {
            width: 100%;
            min-height: 370px;
        }

        .location-map iframe {
            width: 100%;
            min-height: 370px;

            display: block;

            border: 0;
        }


        /* =========================================================
           FAQ
        ========================================================= */

        .faq {
            background: #FFFFFF;
        }

        .faq-list {
            max-width: 850px;

            display: grid;
            gap: 12px;

            margin-inline: auto;
        }

        details {
            padding: 20px 22px;

            background: #FFFAFB;

            border:
                1px solid
                var(--border);

            border-radius: 17px;
        }

        summary {
            position: relative;

            padding-right: 25px;

            cursor: pointer;

            list-style: none;

            color: var(--text-dark);

            font-size: 15px;
            font-weight: 800;
        }

        summary::-webkit-details-marker {
            display: none;
        }

        summary::after {
            content: "+";

            position: absolute;

            right: 0;
            top: -4px;

            color: var(--gold);

            font-size: 21px;
        }

        details[open] summary::after {
            content: "−";
        }

        details p {
            margin-top: 13px;

            color: var(--muted);

            font-size: 14px;
        }


        /* =========================================================
           FINAL CTA
        ========================================================= */

        .final-cta {
            padding:
                110px 0;

            text-align: center;

            background:

                radial-gradient(
                    circle at 50% 100%,
                    rgba(255,214,224,.95),
                    transparent 55%
                ),

                #FFF8FA;
        }

        .final-cta h2 {
            max-width: 800px;

            margin-inline: auto;

            color: var(--text-dark);

            font-family: Georgia, serif;

            font-size:
                clamp(38px, 5vw, 58px);

            line-height: 1.07;

            font-weight: 500;
        }

        .final-cta p {
            max-width: 620px;

            margin:
                18px auto 30px;

            color: var(--muted);

            font-size: 17px;
        }


        /* =========================================================
           FOOTER
        ========================================================= */

        footer {
            padding: 35px 0;

            background: #FFFFFF;

            border-top:
                1px solid
                var(--border);

            color: #8A797E;

            font-size: 13px;
        }

        .footer-content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 20px;
        }

        .footer-instagram {
            color: var(--pink-deep);

            font-weight: 800;
        }


        /* =========================================================
           WHATSAPP FIXO
        ========================================================= */

        .whatsapp-fixed {
            position: fixed;

            right: 20px;
            bottom: 20px;

            z-index: 100;

            width: 59px;
            height: 59px;

            display: grid;
            place-items: center;

            border-radius: 50%;

            background: var(--green);

            color: #FFFFFF;

            font-size: 25px;

            box-shadow:
                0 12px 30px
                rgba(37,211,102,.28);

            transition: transform .2s ease;
        }

        .whatsapp-fixed:hover {
            transform: translateY(-3px);
        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 1000px) {

            .nav-links {
                display: none;
            }

            .hero-grid,
            .about-grid,
            .location-grid {
                grid-template-columns: 1fr;
            }

            .hero {
                padding-top: 130px;
            }

            .hero-visual {
                min-height: 430px;
            }

            .cards,
            .service-grid {
                grid-template-columns:
                    repeat(2, 1fr);
            }

            .process-grid {
                grid-template-columns:
                    repeat(2, 1fr);
            }

            .jewelry-grid {
                grid-template-columns:
                    repeat(3, 1fr);
            }

            .safety-grid {
                grid-template-columns: 1fr;
            }
        }


        @media (max-width: 650px) {

            .container {
                width:
                    calc(100% - 28px);
            }

            section {
                padding: 75px 0;
            }

            .hero {
                min-height: auto;

                padding:
                    120px 0
                    70px;
            }

            .hero h1 {
                font-size: 47px;
            }

            .hero-actions {
                flex-direction: column;
            }

            .hero-actions .button {
                width: 100%;
            }

            .hero-circle {
                width: 330px;
            }

            .hero-card {
                width: 78%;

                padding:
                    28px 20px;
            }

            .cards,
            .service-grid,
            .process-grid {
                grid-template-columns: 1fr;
            }

            .jewelry-grid {
                grid-template-columns:
                    repeat(2, 1fr);
            }

            .v8-gallery {
                grid-template-columns:
                    repeat(2, 1fr);
            }

            .footer-content {
                flex-direction: column;

                text-align: center;
            }

            .whatsapp-fixed {
                width: 55px;
                height: 55px;

                right: 15px;
                bottom: 15px;
            }
        }

    </style>

</head>


<body>


    <!-- =========================================================
         HEADER
    ========================================================== -->

    <header class="site-header">

        <div class="container nav">

            <a
                href="#inicio"
                class="brand"
                aria-label="Elaine Maidana Furo Humanizado"
            >

                <div class="brand-mark">
                    E
                </div>

                <div>

                    <span class="brand-name">
                        Elaine Maidana
                    </span>

                    <span class="brand-subtitle">
                        Furo Humanizado
                    </span>

                </div>

            </a>


            <nav class="nav-links">

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#servicos">
                    Serviços
                </a>

                <a href="#joias">
                    Joias
                </a>

                <a href="#galeria">
                    Galeria
                </a>

                <a href="#localizacao">
                    Atendimento
                </a>

                <a
                    href="#"
                    data-v8="social.instagram"
                    class="nav-instagram"
                >
                    Instagram
                </a>

            </nav>

        </div>

    </header>


    <!-- =========================================================
         MAIN
    ========================================================== -->

    <main>


        <!-- =====================================================
             HERO
        ====================================================== -->

        <section
            id="inicio"
            class="hero"
        >

            <div class="container hero-grid">


                <div class="hero-content">

                    <span class="hero-badge">
                        ✦ Furo Humanizado
                    </span>


                    <h1>
                        Furo humanizado
                        <em>
                            com amor,
                            segurança e cuidado.
                        </em>
                    </h1>


                    <p class="hero-text">
                        Uma experiência mais acolhedora para
                        bebês, crianças e adultos, com atenção
                        à biossegurança e ao cuidado em cada
                        etapa do atendimento.
                    </p>


                    <div class="hero-actions">

                        <a
                            href="#"
                            data-v8="contact.whatsapp"
                            class="button button-primary"
                        >
                            Agendar pelo WhatsApp
                        </a>


                        <a
                            href="#"
                            data-v8="social.instagram"
                            class="button button-secondary"
                        >
                            Conhecer o Instagram
                        </a>

                    </div>


                    <p class="hero-note">
                        Atendimento domiciliar em
                        Porto Alegre e Canoas.
                    </p>

                </div>


                <div class="hero-visual">

                    <div class="hero-circle">

                        <div class="hero-card">

                            <div class="hero-heart">
                                ♡
                            </div>


                            <h2>
                                Elaine Maidana
                            </h2>


                            <p>
                                Técnica de Enfermagem
                                especializada em
                                Furo Humanizado.
                            </p>


                            <span class="hero-tag">
                                Cuidado • Segurança • Amor
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             DIFERENCIAIS
        ====================================================== -->

        <section class="differentials">

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        DIFERENCIAIS
                    </span>

                    <h2 class="section-title">
                        Cuidado em cada detalhe.
                    </h2>

                    <p class="section-description">
                        O furo humanizado une técnica,
                        acolhimento e atenção para tornar
                        esse momento mais tranquilo.
                    </p>

                </div>


                <div class="cards">


                    <article class="card">

                        <div class="card-icon">
                            ♡
                        </div>

                        <h3>
                            Técnica de Enfermagem
                        </h3>

                        <p>
                            Atendimento realizado por uma
                            profissional Técnica de Enfermagem,
                            com atenção aos cuidados de
                            biossegurança.
                        </p>

                    </article>


                    <article class="card">

                        <div class="card-icon">
                            ✦
                        </div>

                        <h3>
                            Joias selecionadas
                        </h3>

                        <p>
                            Joias em materiais escolhidos
                            para oferecer conforto e segurança,
                            incluindo opções em titânio.
                        </p>

                    </article>


                    <article class="card">

                        <div class="card-icon">
                            ⌂
                        </div>

                        <h3>
                            Atendimento em casa
                        </h3>

                        <p>
                            Você recebe o atendimento no
                            conforto da sua casa, em
                            Porto Alegre e Canoas.
                        </p>

                    </article>


                    <article class="card">

                        <div class="card-icon">
                            ✓
                        </div>

                        <h3>
                            Cuidados pós-furo
                        </h3>

                        <p>
                            Orientações e cuidados para
                            acompanhar corretamente o
                            período após o procedimento.
                        </p>

                    </article>


                </div>

            </div>

        </section>


        <!-- =====================================================
             SOBRE
        ====================================================== -->

        <section
            id="sobre"
            class="about"
        >

            <div class="container about-grid">


                <div class="about-visual">

                    <div class="about-card">

                        <div class="about-card-symbol">
                            ♡
                        </div>

                        <strong>
                            Elaine Maidana
                        </strong>

                        <span>
                            Furo Humanizado
                        </span>

                    </div>

                </div>


                <div class="about-content">

                    <span class="section-label">
                        SOBRE ELAINE
                    </span>


                    <h2 class="section-title">
                        Um cuidado pensado
                        para você.
                    </h2>


                    <p>
                        Elaine Maidana é Técnica de Enfermagem
                        especializada em Furo Humanizado,
                        oferecendo uma experiência acolhedora,
                        delicada e cuidadosa.
                    </p>


                    <p>
                        O atendimento é realizado em domicílio,
                        com atenção à biossegurança, materiais
                        estéreis e descartáveis e orientações
                        para os cuidados após o furo.
                    </p>


                    <div class="about-list">

                        <div class="about-list-item">

                            <span class="check">
                                ✓
                            </span>

                            <span>
                                Atendimento humanizado
                            </span>

                        </div>


                        <div class="about-list-item">

                            <span class="check">
                                ✓
                            </span>

                            <span>
                                Biossegurança e materiais
                                adequados
                            </span>

                        </div>


                        <div class="about-list-item">

                            <span class="check">
                                ✓
                            </span>

                            <span>
                                Atendimento domiciliar
                            </span>

                        </div>


                        <div class="about-list-item">

                            <span class="check">
                                ✓
                            </span>

                            <span>
                                Orientações de cuidados
                                após o procedimento
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             SERVIÇOS
        ====================================================== -->

        <section
            id="servicos"
            class="services"
        >

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        SERVIÇOS
                    </span>

                    <h2 class="section-title">
                        Encontre o cuidado ideal.
                    </h2>

                    <p class="section-description">
                        Do primeiro furinho aos projetos
                        de orelha, cada atendimento é
                        pensado de forma individual.
                    </p>

                </div>


                <div class="service-grid">


                    <article class="service">

                        <span class="service-number">
                            01
                        </span>

                        <h3>
                            Furinho Humanizado Baby
                        </h3>

                        <p>
                            Uma experiência acolhedora
                            para o primeiro furinho dos
                            pequenos.
                        </p>

                    </article>


                    <article class="service">

                        <span class="service-number">
                            02
                        </span>

                        <h3>
                            Projeto de Orelha
                        </h3>

                        <p>
                            Planejamento personalizado
                            para criar uma composição
                            harmoniosa e delicada.
                        </p>

                    </article>


                    <article class="service">

                        <span class="service-number">
                            03
                        </span>

                        <h3>
                            Piercings de Cartilagem
                        </h3>

                        <p>
                            Hélix, tragus, conch, daith,
                            rook e outras possibilidades.
                        </p>

                    </article>


                    <article class="service">

                        <span class="service-number">
                            04
                        </span>

                        <h3>
                            Joias
                        </h3>

                        <p>
                            Opções de joias para diferentes
                            estilos e projetos de orelha.
                        </p>

                    </article>


                </div>

            </div>

        </section>


        <!-- =====================================================
             SEGURANÇA
        ====================================================== -->

        <section class="safety">

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        SEGURANÇA
                    </span>

                    <h2 class="section-title">
                        Técnica e cuidado
                        em primeiro lugar.
                    </h2>

                </div>


                <div class="safety-grid">


                    <article class="safety-card">

                        <h3>
                            Biossegurança
                        </h3>

                        <p>
                            O atendimento é realizado com
                            atenção às práticas de biossegurança
                            e aos materiais utilizados durante
                            o procedimento.
                        </p>


                        <div class="safety-points">

                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    Materiais estéreis e
                                    descartáveis
                                </span>
                            </div>


                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    Atendimento com cuidado
                                    e organização
                                </span>
                            </div>


                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    Orientações de cuidados
                                    pós-furo
                                </span>
                            </div>

                        </div>

                    </article>


                    <article class="safety-card">

                        <h3>
                            Titânio biocompatível
                        </h3>

                        <p>
                            Entre as opções disponíveis estão
                            joias em titânio biocompatível,
                            além de outras possibilidades
                            conforme o projeto.
                        </p>


                        <div class="safety-points">

                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    <strong>
                                        Titânio
                                    </strong>
                                    biocompatível
                                </span>
                            </div>


                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    Opções em zircônia
                                </span>
                            </div>


                            <div class="safety-point">
                                <span class="check">✓</span>

                                <span>
                                    Diferentes estilos
                                    de joias
                                </span>
                            </div>

                        </div>

                    </article>


                </div>

            </div>

        </section>


        <!-- =====================================================
             JOIAS
        ====================================================== -->

        <section
            id="joias"
            class="jewelry"
        >

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        JOIAS
                    </span>

                    <h2 class="section-title">
                        Delicadeza nos detalhes.
                    </h2>

                    <p class="section-description">
                        Algumas possibilidades para
                        complementar seu projeto de orelha.
                    </p>

                </div>


                <div class="jewelry-grid">

                    <div class="jewel">
                        <span>
                            Borboleta
                        </span>
                    </div>

                    <div class="jewel">
                        <span>
                            Flor
                        </span>
                    </div>

                    <div class="jewel">
                        <span>
                            Estrela
                        </span>
                    </div>

                    <div class="jewel">
                        <span>
                            Coração
                        </span>
                    </div>

                    <div class="jewel">
                        <span>
                            Ponto de luz
                        </span>
                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             GALERIA
             CONTROLADA PELO V8 LOADER
        ====================================================== -->

        <section
            id="galeria"
            class="gallery"
        >

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        GALERIA
                    </span>

                    <h2 class="section-title">
                        Resultados e projetos.
                    </h2>

                    <p class="section-description">
                        Conheça os trabalhos realizados
                        por Elaine.
                    </p>

                </div>


                <div
                    class="v8-gallery"
                    data-v8-gallery
                ></div>

            </div>

        </section>


        <!-- =====================================================
             COMO FUNCIONA
        ====================================================== -->

        <section class="process">

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        COMO FUNCIONA
                    </span>

                    <h2 class="section-title">
                        Do agendamento ao cuidado.
                    </h2>

                </div>


                <div class="process-grid">


                    <article class="process-item">

                        <div class="process-number">
                            1
                        </div>

                        <h3>
                            Agendamento
                        </h3>

                        <p>
                            Entre em contato pelo WhatsApp
                            para conversar sobre seu atendimento.
                        </p>

                    </article>


                    <article class="process-item">

                        <div class="process-number">
                            2
                        </div>

                        <h3>
                            Visita domiciliar
                        </h3>

                        <p>
                            O atendimento acontece no
                            conforto da sua casa.
                        </p>

                    </article>


                    <article class="process-item">

                        <div class="process-number">
                            3
                        </div>

                        <h3>
                            Procedimento
                        </h3>

                        <p>
                            O furo é realizado com
                            cuidado e atenção.
                        </p>

                    </article>


                    <article class="process-item">

                        <div class="process-number">
                            4
                        </div>

                        <h3>
                            Pós-furo
                        </h3>

                        <p>
                            Você recebe orientações
                            para os cuidados necessários.
                        </p>

                    </article>


                </div>

            </div>

        </section>


        <!-- =====================================================
             LOCALIZAÇÃO
             CONTROLADA PELO V8 LOADER
        ====================================================== -->

        <section
            id="localizacao"
            class="location"
        >

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        ATENDIMENTO
                    </span>

                    <h2 class="section-title">
                        Atendimento onde você está.
                    </h2>

                    <p class="section-description">
                        Elaine realiza atendimento domiciliar
                        em Porto Alegre e Canoas.
                    </p>

                </div>


                <div class="location-grid">


                    <div class="location-card">

                        <h3>
                            Atendimento domiciliar
                        </h3>


                        <p>
                            O atendimento é realizado no
                            conforto da sua casa.
                        </p>


                        <p
                            data-v8="content.address"
                        >
                            Porto Alegre e Canoas.
                        </p>


                        <div class="cities">

                            <span class="city">
                                Porto Alegre
                            </span>

                            <span class="city">
                                Canoas
                            </span>

                        </div>


                        <div style="margin-top:28px;">

                            <a
                                href="#"
                                data-v8="contact.whatsapp"
                                class="button button-primary"
                            >
                                Agendar atendimento
                            </a>

                        </div>

                    </div>


                    <div class="location-map">

                        <div
                            data-v8-maps-embed
                        ></div>

                    </div>


                </div>

            </div>

        </section>


        <!-- =====================================================
             FAQ
        ====================================================== -->

        <section class="faq">

            <div class="container">


                <div class="center-heading">

                    <span class="section-label">
                        DÚVIDAS
                    </span>

                    <h2 class="section-title">
                        Perguntas frequentes.
                    </h2>

                </div>


                <div class="faq-list">


                    <details>

                        <summary>
                            O furo humanizado dói?
                        </summary>

                        <p>
                            A percepção pode variar de pessoa
                            para pessoa. A proposta do atendimento
                            humanizado é tornar a experiência
                            mais acolhedora e tranquila.
                        </p>

                    </details>


                    <details>

                        <summary>
                            Qual idade pode fazer o furo?
                        </summary>

                        <p>
                            A indicação depende da idade,
                            condições individuais e avaliação
                            adequada para cada atendimento.
                        </p>

                    </details>


                    <details>

                        <summary>
                            Por que escolher uma joia de titânio?
                        </summary>

                        <p>
                            O titânio é utilizado em joias
                            corporais por suas características
                            de biocompatibilidade. A escolha
                            da joia deve considerar o procedimento
                            e a orientação profissional.
                        </p>

                    </details>


                    <details>

                        <summary>
                            Posso dormir sobre o piercing?
                        </summary>

                        <p>
                            Durante a cicatrização, é recomendado
                            seguir as orientações de cuidados
                            fornecidas após o procedimento.
                        </p>

                    </details>


                    <details>

                        <summary>
                            O atendimento é em domicílio?
                        </summary>

                        <p>
                            Sim. Elaine realiza atendimento
                            domiciliar em Porto Alegre e Canoas.
                        </p>

                    </details>


                </div>

            </div>

        </section>


        <!-- =====================================================
             CTA FINAL
        ====================================================== -->

        <section class="final-cta">

            <div class="container">

                <h2>
                    Seu momento merece
                    ser cuidado com carinho.
                </h2>


                <p>
                    Agende seu atendimento com Elaine Maidana
                    e conheça a experiência do Furo Humanizado.
                </p>


                <a
                    href="#"
                    data-v8="contact.whatsapp"
                    class="button button-primary"
                >
                    Agendar pelo WhatsApp
                </a>

            </div>

        </section>


    </main>


    <!-- =========================================================
         FOOTER
    ========================================================== -->

    <footer>

        <div class="container footer-content">

            <div>
                ©
                <span id="year"></span>
                Elaine Maidana — Furo Humanizado
            </div>


            <a
                href="#"
                data-v8="social.instagram"
                class="footer-instagram"
            >
                @elainemaidanafurohumanizado
            </a>

        </div>

    </footer>


    <!-- =========================================================
         WHATSAPP FIXO
         O V8 LOADER DEFINE O LINK
    ========================================================== -->

    <a
        href="#"
        data-v8="contact.whatsapp"
        class="whatsapp-fixed"
        aria-label="Agendar pelo WhatsApp"
        title="Agendar pelo WhatsApp"
    >
        ✆
    </a>


    <!-- =========================================================
         ANO
    ========================================================== -->

    <script>

        document.getElementById("year").textContent =
            new Date().getFullYear();

    </script>


    <!-- =========================================================
         V8 ADMIN UNIVERSAL — LOADER
         NÃO ALTERAR
    ========================================================== -->

    <script
        src="js/v8-loader.js"
        data-project-id="61d5d01f-b017-4f84-8a15-4d94e7dbbd89">
    </script>

</body>

</html>
