var Rect;

Rect = (function() {
  function Rect(tl1, br1, data) {
    this.tl = tl1;
    this.br = br1;
    this.data = data || {};
  }

  Rect.prototype.top = function() {
    return this.tl[1];
  };

  Rect.prototype.left = function() {
    return this.tl[0];
  };

  Rect.prototype.width = function() {
    return this.br[0] - this.tl[0];
  };

  Rect.prototype.height = function() {
    return this.br[1] - this.tl[1];
  };

  Rect.prototype.aspect = function() {
    return this.width() / this.height();
  };

  Rect.prototype.tlwh = function() {
    return [this.top(), this.left(), this.width(), this.height()].join(',');
  };

  Rect.prototype.project = function(m) {
    return new Rect(Rect.vxm(this.tl, m), Rect.vxm(this.br, m), this.data);
  };

  Rect.prototype.scale = function(s) {
    return this.project([s, 0, 0, 0, s, 0, 0, 0, s]);
  };

  Rect.prototype.getTranslateProjection = function(rect) {
    var tx, ty;
    tx = rect.left() - this.left();
    ty = rect.top() - this.top();
    return [1, 0, 0, 0, 1, 0, tx, ty, 1];
  };

  Rect.prototype.getScaleProjection = function(rect, cover) {
    var s, sx, sy;
    sx = rect.width() / this.width();
    sy = rect.height() / this.height();
    s = cover ? Math.max(sx, sy) : Math.min(sx, sy);
    return [s, 0, 0, 0, s, 0, 0, 0, s];
  };

  Rect.prototype.getFitProjection = function(rect) {
    var scale, translate;
    translate = this.getTranslateProjection(rect);
    scale = this.getScaleProjection(rect);
    scale[6] = translate[6];
    scale[7] = translate[7];
    return scale;
  };

  Rect.prototype.pad = function(ratio) {
    var dh, dw;
    dw = this.width() * ratio;
    dh = this.height() * ratio;
    return new Rect([this.tl[0] - dw, this.tl[1] - dh, 1], [this.br[0] + dw, this.br[1] + dh, 1], this.data);
  };

  Rect.prototype.center = function() {
    return [(this.tl[0] + this.br[0]) / 2, (this.tl[1] + this.br[1]) / 2, 1];
  };

  Rect.prototype.aspectRatio = function() {
    return this.width() / this.height();
  };

  Rect.prototype.toString = function() {
    return "(" + this.tl[0] + "," + this.tl[1] + ")-(" + this.br[0] + "," + this.br[1] + ")-" + (this.width()) + "-" + (this.height());
  };

  return Rect;

})();

Rect.fromCoords = function(left, top, width, height, data) {
  var br, tl;
  tl = [left, top, 1];
  br = [left + width, top + height, 1];
  return new Rect(tl, br, data);
};

Rect.fromCenter = function(left, top, width, height, data) {
  var br, tl;
  tl = [left - width / 2, top - height / 2, 1];
  br = [left + width / 2, top + height / 2, 1];
  return new Rect(tl, br, data);
};

Rect.vxm = function(v, m) {
  return [v[0] * m[0] + v[1] * m[3] + v[2] * m[6], v[0] * m[1] + v[1] * m[4] + v[2] * m[7], v[0] * m[2] + v[1] * m[5] + v[2] * m[8]];
};

Rect.mxm = function(a, b) {
  return [a[0] * b[0] + a[3] * b[1] + a[6] * b[2], a[1] * b[0] + a[4] * b[1] + a[7] * b[2], a[2] * b[0] + a[5] * b[1] + a[8] * b[2], a[0] * b[3] + a[3] * b[4] + a[6] * b[5], a[1] * b[3] + a[4] * b[4] + a[7] * b[5], a[2] * b[3] + a[5] * b[4] + a[8] * b[5], a[0] * b[6] + a[3] * b[7] + a[6] * b[8], a[1] * b[6] + a[4] * b[7] + a[7] * b[8], a[2] * b[6] + a[5] * b[7] + a[8] * b[8]];
};

Rect.minv = function(m) {
  var a, b, c, d, e, f, g, h, i, q;
  a = m[0]; b = m[1]; c = m[2]; d = m[3]; e = m[4]; f = m[5]; g = m[6]; h = m[7]; i = m[8];
  q = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  if (q === 0) {
    return null;
  }
  return [(e * i - f * h) / q, (c * h - b * i) / q, (b * f - c * e) / q, (f * g - d * i) / q, (a * i - c * g) / q, (c * d - a * f) / q, (d * h - e * g) / q, (b * g - a * h) / q, (a * e - b * d) / q];
};

export default Rect;