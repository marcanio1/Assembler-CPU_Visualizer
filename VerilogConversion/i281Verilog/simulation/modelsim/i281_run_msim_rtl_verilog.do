transcript on
if {[file exists rtl_work]} {
	vdel -lib rtl_work -all
}
vlib rtl_work
vmap work rtl_work

vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_FullAdder.v}
vlog -vlog01compat -work work +incdir+D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog {D:/school_stuff/sdmay21-38/VerilogConversion/i281Verilog/_6BitAdder.v}

