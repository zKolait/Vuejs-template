<template>
    <div id="page__container">
        <admin-header />
        <main>
            <slot />
        </main>
        <admin-footer />
    </div>
</template>


<script>
import AdminHeader from '@/components/Admin/header'
import AdminFooter from '@/components/Admin/footer'

export default {
    components: { AdminHeader, AdminFooter }
}
</script>