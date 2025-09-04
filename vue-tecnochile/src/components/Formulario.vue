<script setup></script>

<template>
    <div class="col-md-6 ">
                <form id="formContacto" class="p-3 rounded">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre y apellido</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre y apellido">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="correo" placeholder="Escribe correo de contacto">
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" name="mensaje" id="mensaje" rows="5"
                            placeholder="Escribe aquí tu mensaje"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
</template>

<style scoped>
@keyframes hero-gradient-animation {
    0% {
        --x-0: 20%;
        --y-0: 88%;
        --c-0: hsla(334, 80%, 86%, 1);
        --s-start-0: 4%;
        --s-end-0: 64%;
        --y-1: 65%;
        --x-1: 13%;
        --s-start-1: 17%;
        --s-end-1: 76%;
        --c-1: hsla(260, 100%, 97%, 1);
        --y-2: 58%;
        --x-2: 4%;
        --c-2: hsla(262, 60%, 88%, 1);
        --s-start-2: 19%;
        --s-end-2: 52%;
        --s-start-3: 5%;
        --s-end-3: 57%;
        --c-3: hsla(250, 67%, 79%, 1);
        --x-3: 17%;
        --y-3: 11%;
    }

    100% {
        --x-0: 92%;
        --y-0: 79%;
        --c-0: hsla(216, 55%, 91%, 1);
        --s-start-0: 15%;
        --s-end-0: 76%;
        --y-1: 42%;
        --x-1: 32%;
        --s-start-1: 2%;
        --s-end-1: 80%;
        --c-1: hsla(198, 64%, 56%, 1);
        --y-2: 83%;
        --x-2: 15%;
        --c-2: hsla(335, 93%, 95%, 1);
        --s-start-2: 15%;
        --s-end-2: 77%;
        --s-start-3: 0%;
        --s-end-3: 72%;
        --c-3: hsla(271, 88%, 97%, 1);
        --x-3: 56%;
        --y-3: 37%;
    }
}

@property --x-0 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 20%
}

@property --y-0 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 88%
}

@property --c-0 {
    syntax: '<color>';
    inherits: false;
    initial-value: hsla(334, 80%, 86%, 1)
}

@property --s-start-0 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 4%
}

@property --s-end-0 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 64%
}

@property --y-1 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 65%
}

@property --x-1 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 13%
}

@property --s-start-1 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 17%
}

@property --s-end-1 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 76%
}

@property --c-1 {
    syntax: '<color>';
    inherits: false;
    initial-value: hsla(260, 100%, 97%, 1)
}

@property --y-2 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 58%
}

@property --x-2 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 4%
}

@property --c-2 {
    syntax: '<color>';
    inherits: false;
    initial-value: hsla(262, 60%, 88%, 1)
}

@property --s-start-2 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 19%
}

@property --s-end-2 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 52%
}

@property --s-start-3 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 5%
}

@property --s-end-3 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 57%
}

@property --c-3 {
    syntax: '<color>';
    inherits: false;
    initial-value: hsla(250, 67%, 79%, 1)
}

@property --x-3 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 17%
}

@property --y-3 {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 11%
}

#formContacto {
    --x-0: 20%;
    --y-0: 88%;
    --c-0: hsla(334, 80%, 86%, 1);
    --y-1: 65%;
    --x-1: 13%;
    --c-1: hsla(260, 100%, 97%, 1);
    --y-2: 58%;
    --x-2: 4%;
    --c-2: hsla(262, 60%, 88%, 1);
    --c-3: hsla(250, 67%, 79%, 1);
    --x-3: 17%;
    --y-3: 11%;
    ;
    background-color: hsla(262, 57%, 69%, 1);
    background-image: radial-gradient(circle at var(--x-0) var(--y-0), var(--c-0) var(--s-start-0), transparent var(--s-end-0)), radial-gradient(circle at var(--x-1) var(--y-1), var(--c-1) var(--s-start-1), transparent var(--s-end-1)), radial-gradient(circle at var(--x-2) var(--y-2), var(--c-2) var(--s-start-2), transparent var(--s-end-2)), radial-gradient(circle at var(--x-3) var(--y-3), var(--c-3) var(--s-start-3), transparent var(--s-end-3));
    animation: hero-gradient-animation 10s linear infinite alternate;
    background-blend-mode: normal, normal, normal, normal;
}
</style>