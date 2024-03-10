AFRAME.registerComponent("play-on-click", {
    schema: {
        IsPlaying: { type: "boolean", default: false }
    },

    init: function () {
        this.videoEl = this.el.getAttribute("material").src;
        this.onClick = this.onClick.bind(this);
    },
    play: function () {
        window.addEventListener("click", this.onClick)
    },

    onClick: function (evt) {
        if (!this.videoEl) {
            return;
        }

        var IsPlaying = this.el.getAttribute("play-on-click").IsPlaying

        this.el.object3D.visible = true;

        if (!IsPlaying) {
            this.el.setAttribute("play-on-click", {
                isPlaying: true

            })
            this.videoEl.play();
        }


        else {
            this.el.setAttribute("play-on-click", {
                isPlaying: false

            })
            this.videoEl.pause();
        }
    }
})