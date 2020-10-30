function dimval( input, max_in, max_out, min_in, min_out, rate) {
  if (rate < 0.000001) {rate = 0.000001}
  if (input > max_in) {input = max_in}
  if (input < min_in) {input = min_in}
  mult = (max_out - min_out);

  input = (input - min_in) / (max_in - min_in);
  input = Math.sqrt(input) / rate;
  input = (input * mult) + min_out;
  if (input > max_out) {input = max_out}
  return input;

}

dimval(50, 100, 1000, 10, 100, 1)}d = =>
  )}
