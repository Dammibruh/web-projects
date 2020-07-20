main = new Vue({
    el: ".calc",
    data: {
        previous: "",
        current: ""
    },
    methods: {
        add: function (num) {
            this.current += `${num}`;
        },
        output: function () {
            try {
                this.current = `${eval(this.current)}`;
            }
            catch {
                this.current = "Syntax Error";
                
            }
        },
        point: function () {
            var check = this.current.split(/[\s+*/-]+/);
            if (check[check.length-1].indexOf(".") === -1) {
                this.add('.');
                
            }
        },
        del_el: function () {
            this.current = this.current.substring(0, this.current.length - 1);
        },
        bracket: 
        function () {
            this.current.indexOf("(") === -1 ? add('(') : add(')');
        }
    }
});
