<template>
    <div id="page__container">
        <landing-header />
        <main>
            <slot />
        </main>
        <landing-footer />
    </div>
</template>


<script>
import LandingHeader from '@/components/Landing/header'
import LandingFooter from '@/components/Landing/footer'

export default {
    components: { LandingHeader, LandingFooter }
}
</script>