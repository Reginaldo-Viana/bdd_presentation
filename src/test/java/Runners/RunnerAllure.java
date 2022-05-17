package Runners;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@SuppressWarnings("unused")
public class RunnerAllure {
	   static final Runtime run = Runtime.getRuntime();
	    static Process pro;
	    static BufferedReader read;
	   
		private static void showFB() throws Exception {
	    	
	        read = new BufferedReader(new InputStreamReader(pro.getInputStream()));
	        System.out.println(read.readLine());
	    }

	    public static void main(String[] args)
	    {
	    	System.out.println("Open server Allure");
	        String[] cmds = {"cmd /c cmd.exe ", "allure serve"
	    };
	        try {
	            pro = run.exec(String.join("& ", cmds));	            
	        } catch(Exception e) {
	            System.err.println(e);
	        }
	    }
}
