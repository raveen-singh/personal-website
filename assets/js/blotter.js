function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
  var angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;

  angle = 180 + angle;

  return angle;
}

function distanceBetweenPoints(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt((a * a) + (b * b));
}

$(document)
  .ready(function () {

    var styleProperties = {
      family: "Oswald",
      size: 100,
      fill: "#171717",
      paddingLeft: 100,
      paddingRight: 100,
      paddingTop: 100,
      paddingBottom: 100
    };

    var text = new Blotter.Text("Raveen", styleProperties);

    var material = new Blotter.ChannelSplitMaterial();

    var blotter = new Blotter(material, {texts: text});

    var myScope = blotter.forText(text);

    blotter.on("ready", function () {
      myScope.appendTo(document.getElementById("blob"));
      scope2.appendTo(document.getElementById("blob"));

    });

    $('html').mousemove(function (event) {
      var currentX = event.pageX;
      var currentY = event.pageY;

      var offset = $('#blob').offset();
      var width = $('#blob').width();
      var height = $('#blob').height();

      var centerX = offset.left + width / 2;
      var centerY = offset.top + height / 2;

      var angle = 0;
      angle = angleBetweenPointsInDegrees(centerX, centerY, currentX, currentY);
      var blur = 0;
      blur = distanceBetweenPoints(centerX, centerY, currentX, currentY) * 0.0001;
      // blur = 0.1; var blur = 0.1;

      var dis = distanceBetweenPoints(centerX, centerY, currentX, currentY);

      $('#angle').html(angle);
      $('#blob-pos').html('offset: ' + offset.left + ' x: ' + centerX + ',y: ' + centerY + '');
      $('#dis').html(dis);
      $('#mp').html(currentX + ',' + currentY);

      myScope.material.uniforms.uRotation.value = angle;
      myScope.material.uniforms.uOffset.value = blur;
    });

  });