<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::table('job_user', function (Blueprint $table) {
      $table->dropForeign(['job_id']);
      $table->unsignedBigInteger('job_id')->nullable()->change();
      // $table->foreignId('job_id')->nullable()->change();
      $table->foreign('job_id')->references('id')->on('jobs')->onDelete('set null');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('job_user', function (Blueprint $table) {
      //
    });
  }
};
