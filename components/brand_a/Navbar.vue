<template>
        <div :style="{width:'100vw',heigth:'100px',backgroundColor:'red'}">
        <div :style="{width:'100%',display:'flex', justifyContent:'space-between'}">
            <h2>brand-a</h2>
            <div :style="{width:'20%',display:'flex', justifyContent:'space-between'}">            
                <NuxtLink to="/">home</NuxtLink>
                <NuxtLink  to="/about-me">about me</NuxtLink></div>
        </div>
    </div>
</template>