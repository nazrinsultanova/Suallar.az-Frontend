var canvas = document.getElementById('firstChart');
    
        var data = {
            data: [550,620,450,650,520,580,625,670,660,0],
            groups: ['II ixtisas qrupu','II ixtisas qrupu','II ixtisas qrupu','II ixtisas qrupu','II ixtisas qrupu',
            'II ixtisas qrupu','II ixtisas qrupu','II ixtisas qrupu'],
            dates: ['22 Sentyabr 2020, 12:30', '22 Sentyabr 2020, 12:30', '22 Sentyabr 2020, 12:30', '22 Sentyabr 2020, 12:30',
             '22 Sentyabr 2020, 12:30', '22 Sentyabr 2020, 12:30', '22 Sentyabr 2020, 12:30','22 Sentyabr 2020, 12:30',
            '22 Sentyabr 2020, 12:30']
        }

        var customTooltips = function (tooltip) {
            var tooltipEl = document.getElementById('chartjs-tooltip');

            if (tooltip.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
            }

            tooltipEl.classList.remove('above', 'below', 'no-transform');
            if (tooltip.yAlign) {
                tooltipEl.classList.add(tooltip.yAlign);
            } else {
                tooltipEl.classList.add('no-transform');
            }
            
            if (tooltip.dataPoints.length) {
                var ind = tooltip.dataPoints[0].index;
                $('#chartjs-tooltip').css('display', 'block');
                $("#scores").text(data.data[ind]);
                $("#dates").text(data.dates[ind]);
                $("#groups").text(data.groups[ind]);
            }

            var positionY = this._chart.canvas.offsetTop;
            var positionX = this._chart.canvas.offsetLeft;

       
            tooltipEl.style.opacity = 1;
            tooltipEl.style.left = positionX + tooltip.caretX + 'px';
            tooltipEl.style.top = positionY + tooltip.caretY + 'px';
            tooltipEl.style.fontFamily = tooltip._fontFamily;
            tooltipEl.style.fontSize = tooltip.fontSize;
            tooltipEl.style.fontStyle = tooltip._fontStyle;
            tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
        };

        var barData = {
            labels: ["II ixtisas qrupu", "II ixtisas qrupu", "II ixtisas qrupu", "II ixtisas qrupu", 
            "II ixtisas qrupu", "II ixtisas qrupu","II ixtisas qrupu","II ixtisas qrupu","II ixtisas qrupu",],
            datasets: [
                {
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#3E7AFF",
                    borderColor: "red",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHitRadius: 10,
                    data: data.data
                }, 
            ]
        };


        var option = {
            responsive: true,
            maintainAspectRatio: false,
            legend: { display: false },
            scales: {
                xAxes: [{
                    barPercentage: 0.25,
                    gridLines: {display: false},
                    ticks: {
                        display: false
                    }
                }],   
                yAxes: [{
                    gridLines: {
                    drawBorder: false,
                    borderDash: [6,6]
                    }  
                }],
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                custom: customTooltips,
                xPadding: 12,
                yPadding: 16
            }
        };
        var mybarChart = Chart.Bar(canvas, {
            data: barData,
            options: option
        });


        Chart.elements.Rectangle.prototype.draw = function() {
    
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped, radius;
            var borderWidth = vm.borderWidth;
            // Set Radius Here
            // If radius is large enough to cause drawing errors a max radius is imposed
            var cornerRadius = 20;
        
            if (!vm.horizontal) {
                // bar
                left = vm.x - vm.width / 2;
                right = vm.x + vm.width / 2;
                top = vm.y;
                bottom = vm.base;
                signX = 1;
                signY = bottom > top? 1: -1;
                borderSkipped = vm.borderSkipped || 'bottom';
            } else {
                // horizontal bar
                left = vm.base;
                right = vm.x;
                top = vm.y - vm.height / 2;
                bottom = vm.y + vm.height / 2;
                signX = right > left? 1: -1;
                signY = 1;
                borderSkipped = vm.borderSkipped || 'left';
            }
        
            // Canvas doesn't allow us to stroke inside the width so we can
            // adjust the sizes to fit if we're setting a stroke on the line
            if (borderWidth) {
                // borderWidth shold be less than bar width and bar height.
                var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                borderWidth = borderWidth > barSize? barSize: borderWidth;
                var halfStroke = borderWidth / 2;
                // Adjust borderWidth when bar top position is near vm.base(zero).
                var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
                var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
                var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
                var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
                // not become a vertical line?
                if (borderLeft !== borderRight) {
                    top = borderTop;
                    bottom = borderBottom;
                }
                // not become a horizontal line?
                if (borderTop !== borderBottom) {
                    left = borderLeft;
                    right = borderRight;
                }
            }
        
            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;
        
            // Corner points, from bottom-left to bottom-right clockwise
            // | 1 2 |
            // | 0 3 |
            var corners = [
                [left, bottom],
                [left, top],
                [right, top],
                [right, bottom]
            ];
        
            // Find first (starting) corner with fallback to 'bottom'
            var borders = ['bottom', 'left', 'top', 'right'];
            var startCorner = borders.indexOf(borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }
        
            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }
        
            // Draw rectangle from 'startCorner'
            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);
        
            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                nextCornerId = i+1;
                if(nextCornerId == 4){
                    nextCornerId = 0
                }
        
                nextCorner = cornerAt(nextCornerId);
        
                width = corners[2][0] - corners[1][0];
                height = corners[0][1] - corners[1][1];
                x = corners[1][0];
                y = corners[1][1];
                
                var radius = cornerRadius;
                
                // Fix radius being too large
                if(radius > height/2){
                    radius = height/2;
                }if(radius > width/2){
                    radius = width/2;
                }
        
                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                ctx.lineTo(x + radius, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
        
            }
        
            ctx.fill();
            if (borderWidth) {
                ctx.stroke();
            }
        }; 