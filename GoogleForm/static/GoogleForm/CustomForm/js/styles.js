$(document).ready(function () {
    $('#exhibit-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#exhibit-no').attr('checked', false);
        }
    });

    $('#exhibit-no').change(function () {
        if ($(this).is(":checked")) {
            $('#exhibit-yes').attr('checked', false);
        }
    });

    $('#lender-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#lender-multi').attr('checked', false);
        }

        $("#lender-multi").css('display', 'inline-block');
        $("#lender-multi-label").css('display', 'inline-block');
        $("#lender-select").css('display', 'none');
        $('.lender-organized').css('display', 'none');
    });

    $('#lender-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#lender-individual').attr('checked', false);
        }

        $("#lender-multi").css('display', 'none');
        $("#lender-multi-label").css('display', 'none');

        $("#lender-select").css('display', 'block');

        $("#lender-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.lender-organized').css('display', 'inline-block');
        });
    });

    $('#lender-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#lender-licensed-no').attr('checked', false);
        }
    });

    $('#lender-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#lender-licensed-yes').attr('checked', false);
        }
    });

    $('#broker-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#broker-licensed-no').attr('checked', false);
        }
    });

    $('#broker-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#broker-licensed-yes').attr('checked', false);
        }
    });

    $('#borrower-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower-multi').attr('checked', false);
            $('.borrower-individual-select').css('display', 'inline-block');
        }

        $("#borrower-multi").css('display', 'inline-block');
        $("#borrower-multi-label").css('display', 'inline-block');
        $("#borrower-select").css('display', 'none');
        $('.borrower-organized').css('display', 'none');
    });

    $('#borrower-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower-individual').attr('checked', false);
            $('.borrower-individual-select').css('display', 'none');
        }

        $("#borrower-multi").css('display', 'none');
        $("#borrower-multi-label").css('display', 'none');
        $("#borrower-select").css('display', 'block');
        $("#borrower-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.borrower-organized').css('display', 'inline-block');
        });
    });

    $('#guarantor-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor-multi').attr('checked', false);
        }

        $("#guarantor-multi").css('display', 'inline-block');
        $("#guarantor-multi-label").css('display', 'inline-block');
        $("#guarantor-select").css('display', 'none');
        $('.guarantor-organized').css('display', 'none');
    });

    $('#guarantor-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor-individual').attr('checked', false);
        }

        $("#guarantor-multi").css('display', 'none');
        $("#guarantor-multi-label").css('display', 'none');
        $("#guarantor-select").css('display', 'block');
        $("#guarantor-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.guarantor-organized').css('display', 'inline-block');
        });
    });

    $('#property1-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#property1-no').attr('checked', false);
        }
    });

    $('#property1-no').change(function () {
        if ($(this).is(":checked")) {
            $('#property1-yes').attr('checked', false);
        }
    });

    $('#property2-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#property2-no').attr('checked', false);
        }
    });

    $('#property2-no').change(function () {
        if ($(this).is(":checked")) {
            $('#property2-yes').attr('checked', false);
        }
    });

    $('#property3-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#property3-no').attr('checked', false);
        }
    });

    $('#property3-no').change(function () {
        if ($(this).is(":checked")) {
            $('#property3-yes').attr('checked', false);
        }
    });

    $('#property4-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#property4-no').attr('checked', false);
        }
    });

    $('#property4-no').change(function () {
        if ($(this).is(":checked")) {
            $('#property4-yes').attr('checked', false);
        }
    });

    $('#interest-fix-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#interest-fix-no').attr('checked', false);
        }
    });

    $('#interest-fix-no').change(function () {
        if ($(this).is(":checked")) {
            $('#interest-fix-yes').attr('checked', false);
        }
    });

    $('#payment-penalty-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#payment-penalty-no').attr('checked', false);
        }

        $('.stepdown-payment').css('display', 'inline-block');
        $('.penalty-payment').css('display', 'inline-block');
    });

    $('#payment-penalty-no').change(function () {
        if ($(this).is(":checked")) {
            $('#payment-penalty-yes').attr('checked', false);
        }

        $('.stepdown-payment').css('display', 'none');
        $('.penalty-payment').css('display', 'none');
    });

    $('#ach-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#ach-no').attr('checked', false);
        }
    });

    $('#ach-no').change(function () {
        if ($(this).is(":checked")) {
            $('#ach-yes').attr('checked', false);
        }
    });

    $('#extend-right-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#extend-right-no').attr('checked', false);
        }

        $('.extension-number').css('display', 'inline-block');
        $('.extension-period').css('display', 'inline-block');
        $('.extension-fee').css('display', 'inline-block');
    });

    $('#extend-right-no').change(function () {
        if ($(this).is(":checked")) {
            $('#extend-right-yes').attr('checked', false);
        }

        $('.extension-number').css('display', 'none');
        $('.extension-period').css('display', 'none');
        $('.extension-fee').css('display', 'none');
    });

    // -------------------Lender 2--------------
    $("#multiple-lender2-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender2-no").attr('checked', false);
        }
    });

    $("#multiple-lender2-no").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender2-yes").attr('checked', false);
        }
    });

    $('#lender2-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#lender2-multi').attr('checked', false);
        }

        $('#lender2-multi').css('display', 'inline-block');
        $('#lender2-multi-label').css('display', 'inline-block');
        $('#lender2-select').css('display', 'none');
        $('.lender2-organized').css('display', 'none');
    });

    $('#lender2-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#lender2-individual').attr('checked', false);
        }

        $('#lender2-multi').css('display', 'none');
        $('#lender2-multi-label').css('display', 'none');

        $('#lender2-select').css('display', 'block');

        $('#lender2-select').change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.lender2-organized').css('display', 'inline-block');
        });
    });

    $('#lender2-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#lender2-licensed-no').attr('checked', false);
        }
    });

    $('#lender2-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#lender2-licensed-yes').attr('checked', false);
        }
    });
    // --------------------Lender 3-----------------
    $("#multiple-lender3-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender3-no").attr('checked', false);
        }
    });

    $("#multiple-lender3-no").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender3-yes").attr('checked', false);
        }
    });

    $('#lender3-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#lender3-multi').attr('checked', false);
        }

        $('#lender3-multi').css('display', 'inline-block');
        $('#lender3-multi-label').css('display', 'inline-block');
        $('#lender3-select').css('display', 'none');
        $('.lender3-organized').css('display', 'none');
    });

    $('#lender3-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#lender3-individual').attr('checked', false);
        }

        $('#lender3-multi').css('display', 'none');
        $('#lender3-multi-label').css('display', 'none');

        $('#lender3-select').css('display', 'block');

        $('#lender3-select').change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.lender3-organized').css('display', 'inline-block');
        });
    });

    $('#lender3-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#lender3-licensed-no').attr('checked', false);
        }
    });

    $('#lender3-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#lender3-licensed-yes').attr('checked', false);
        }
    });

    // --------------------Lender 4-----------------
    $("#multiple-lender4-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender4-no").attr('checked', false);
        }
    });

    $("#multiple-lender4-no").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender4-yes").attr('checked', false);
        }
    });

    $('#lender4-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#lender4-multi').attr('checked', false);
        }

        $('#lender4-multi').css('display', 'inline-block');
        $('#lender4-multi-label').css('display', 'inline-block');
        $('#lender4-select').css('display', 'none');
        $('.lender4-organized').css('display', 'none');
    });

    $('#lender4-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#lender4-individual').attr('checked', false);
        }

        $('#lender4-multi').css('display', 'none');
        $('#lender4-multi-label').css('display', 'none');

        $('#lender4-select').css('display', 'block');

        $('#lender4-select').change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.lender4-organized').css('display', 'inline-block');
        });
    });

    $('#lender4-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#lender4-licensed-no').attr('checked', false);
        }
    });

    $('#lender4-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#lender4-licensed-yes').attr('checked', false);
        }
    });

    // --------------------Lender 5-----------------
    $("#multiple-lender5-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender5-no").attr('checked', false);
        }
    });

    $("#multiple-lender5-no").change(function () {
        if ($(this).is(":checked")) {
            $("#multiple-lender5-yes").attr('checked', false);
        }
    });

    $('#lender5-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#lender5-multi').attr('checked', false);
        }

        $('#lender5-multi').css('display', 'inline-block');
        $('#lender5-multi-label').css('display', 'inline-block');
        $('#lender5-select').css('display', 'none');
        $('.lender5-organized').css('display', 'none');
    });

    $('#lender5-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#lender5-individual').attr('checked', false);
        }

        $('#lender5-multi').css('display', 'none');
        $('#lender5-multi-label').css('display', 'none');

        $('#lender5-select').css('display', 'block');

        $('#lender5-select').change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.lender5-organized').css('display', 'inline-block');
        });
    });

    $('#lender5-licensed-yes').change(function () {
        if ($(this).is(":checked")) {
            $('#lender5-licensed-no').attr('checked', false);
        }
    });

    $('#lender5-licensed-no').change(function () {
        if ($(this).is(":checked")) {
            $('#lender5-licensed-yes').attr('checked', false);
        }
    });

    // ------------------borrower2----------------
    $("#borrower2-translator-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower2-translator-no").attr('checked', false);
        }
    });

    $("#borrower2-translator-no").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower2-translator-yes").attr('checked', false);
        }
    });

    $('#borrower2-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower2-multi').attr('checked', false);
            $('.borrower2-individual-select').css('display', 'inline-block');
        }

        $("#borrower2-multi").css('display', 'inline-block');
        $("#borrower2-multi-label").css('display', 'inline-block');
        $("#borrower2-select").css('display', 'none');
        $('.borrower2-organized').css('display', 'none');
    });

    $('#borrower2-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower2-individual').attr('checked', false);
            $('.borrower2-individual-select').css('display', 'none');
        }

        $("#borrower2-multi").css('display', 'none');
        $("#borrower2-multi-label").css('display', 'none');
        $("#borrower2-select").css('display', 'block');
        $("#borrower2-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.borrower2-organized').css('display', 'inline-block');
        });
    });

    // ------------------borrower3----------------
    $("#borrower3-translator-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower3-translator-no").attr('checked', false);
        }
    });

    $("#borrower3-translator-no").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower3-translator-yes").attr('checked', false);
        }
    });
    $('#borrower3-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower3-multi').attr('checked', false);
            $('.borrower3-individual-select').css('display', 'inline-block');
        }

        $("#borrower3-multi").css('display', 'inline-block');
        $("#borrower3-multi-label").css('display', 'inline-block');
        $("#borrower3-select").css('display', 'none');
        $('.borrower3-organized').css('display', 'none');
    });

    $('#borrower3-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower3-individual').attr('checked', false);
            $('.borrower3-individual-select').css('display', 'none');
        }

        $("#borrower3-multi").css('display', 'none');
        $("#borrower3-multi-label").css('display', 'none');
        $("#borrower3-select").css('display', 'block');
        $("#borrower3-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.borrower3-organized').css('display', 'inline-block');
        });
    });

    // ------------------borrower4----------------
    $("#borrower4-translator-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower4-translator-no").attr('checked', false);
        }
    });

    $("#borrower4-translator-no").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower4-translator-yes").attr('checked', false);
        }
    });
    $('#borrower4-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower4-multi').attr('checked', false);
            $('.borrower4-individual-select').css('display', 'inline-block');
        }

        $("#borrower4-multi").css('display', 'inline-block');
        $("#borrower4-multi-label").css('display', 'inline-block');
        $("#borrower4-select").css('display', 'none');
        $('.borrower4-organized').css('display', 'none');
    });

    $('#borrower4-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower4-individual').attr('checked', false);
            $('.borrower4-individual-select').css('display', 'none');
        }

        $("#borrower4-multi").css('display', 'none');
        $("#borrower4-multi-label").css('display', 'none');
        $("#borrower4-select").css('display', 'block');
        $("#borrower4-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.borrower4-organized').css('display', 'inline-block');
        });
    });

    // ------------------borrower5----------------
    $("#borrower5-translator-yes").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower5-translator-no").attr('checked', false);
        }
    });

    $("#borrower5-translator-no").change(function () {
        if ($(this).is(":checked")) {
            $("#borrower5-translator-yes").attr('checked', false);
        }
    });

    $('#borrower5-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower5-multi').attr('checked', false);
            $('.borrower5-individual-select').css('display', 'inline-block');
        }

        $("#borrower5-multi").css('display', 'inline-block');
        $("#borrower5-multi-label").css('display', 'inline-block');
        $("#borrower5-select").css('display', 'none');
        $('.borrower5-organized').css('display', 'none');
    });

    $('#borrower5-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#borrower5-individual').attr('checked', false);
            $('.borrower5-individual-select').css('display', 'none');
        }

        $("#borrower5-multi").css('display', 'none');
        $("#borrower5-multi-label").css('display', 'none');
        $("#borrower5-select").css('display', 'block');
        $("#borrower5-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.borrower5-organized').css('display', 'inline-block');
        });
    });

    // Guarantor2
    $('#guarantor2-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor2-multi').attr('checked', false);
        }

        $("#guarantor2-multi").css('display', 'inline-block');
        $("#guarantor2-multi-label").css('display', 'inline-block');
        $("#guarantor2-select").css('display', 'none');
        $('.guarantor2-organized').css('display', 'none');
    });

    $('#guarantor2-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor2-individual').attr('checked', false);
        }

        $("#guarantor2-multi").css('display', 'none');
        $("#guarantor2-multi-label").css('display', 'none');
        $("#guarantor2-select").css('display', 'block');
        $("#guarantor2-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.guarantor2-organized').css('display', 'inline-block');
        });
    });

    // Guarantor3
    $('#guarantor3-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor3-multi').attr('checked', false);
        }

        $("#guarantor3-multi").css('display', 'inline-block');
        $("#guarantor3-multi-label").css('display', 'inline-block');
        $("#guarantor3-select").css('display', 'none');
        $('.guarantor3-organized').css('display', 'none');
    });

    $('#guarantor3-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor3-individual').attr('checked', false);
        }

        $("#guarantor3-multi").css('display', 'none');
        $("#guarantor3-multi-label").css('display', 'none');
        $("#guarantor3-select").css('display', 'block');
        $("#guarantor3-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.guarantor3-organized').css('display', 'inline-block');
        });
    });

    // Guarantor4
    $('#guarantor4-individual').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor4-multi').attr('checked', false);
        }

        $("#guarantor4-multi").css('display', 'inline-block');
        $("#guarantor4-multi-label").css('display', 'inline-block');
        $("#guarantor4-select").css('display', 'none');
        $('.guarantor4-organized').css('display', 'none');
    });

    $('#guarantor4-multi').change(function () {
        if ($(this).is(":checked")) {
            $('#guarantor4-individual').attr('checked', false);
        }

        $("#guarantor4-multi").css('display', 'none');
        $("#guarantor4-multi-label").css('display', 'none');
        $("#guarantor4-select").css('display', 'block');
        $("#guarantor4-select").change(function () {
            var selected = $(this).children("option:selected").val();
            if (selected !== '') $('.guarantor4-organized').css('display', 'inline-block');
        });
    });

    // lender paid table
    $('.lender-paid-delete').click(function () {
        $(this).parent().parent().remove();
    })

    $('input.addColumn').click(function () {
        if (!$(this).closest('tr').next().length) {
            addColumnToTable()
        }
    })

    function addColumnToTable() {
        let htmlText = '';
        htmlText = '<tr class="text-center">' +
            '<!-- <td>1</td> -->' +
            '<td><input type="text" class="addColumn"></td>' +
            '<td><input type="text" class="addColumn"></td>' +
            '<td>' +
            '<select>' +
            '<option>choose an item</option>' +
            '<option>wire instructions to be provided</option>' +
            '<option>delivery instructions to be provided</option>' +
            '<option>to be net funded</option>' +
            '<option>delivery to lender address</option>' +
            '<option>free paid outside of closing</option>' +
            '<option>show as credited</option>' +
            '<option>delivery to loan servicer</option>' +
            '<option>payment differed until after closing</option>' +
            '</select>' +
            '</td>' +
            '<td class="center">' +
            '<button class="btn btn-danger lender-paid-delete">X</button>' +
            '</td>' +
            '</tr>';

        $('.lender-paid-table').append(htmlText);

        $('.lender-paid-delete').click(function () {
            $(this).parent().parent().remove();
        })

        $('input.addColumn').click(function () {
            if (!$(this).closest('tr').next().length) {
                addColumnToTable()
            }
        })
    }

    // broker paid table
    $('.broker-paid-delete').click(function () {
        $(this).parent().parent().remove();
    })

    $('input.addColumn1').click(function () {
        if (!$(this).closest('tr').next().length) {
            addColumnToTable1()
        }
    })

    function addColumnToTable1() {
        let htmlText = '';
        htmlText = '<tr class="text-center">' +
            '<!-- <td>1</td> -->' +
            '<td><input type="text" class="addColumn1"></td>' +
            '<td><input type="text" class="addColumn1"></td>' +
            '<td>' +
            '<select>' +
            '<option>choose an item</option>' +
            '<option>deliver to broker address</option>' +
            '<option>wire instructions to be provided</option>' +
            '<option>delivery instructions to be provided</option>' +
            '<option>to be net funded</option>' +
            '<option>delivery to lender address</option>' +
            '<option>free paid outside of closing</option>' +
            '<option>show as credited</option>' +
            '<option>delivery to loan servicer</option>' +
            '<option>payment differed until after closing</option>' +
            '</select>' +
            '</td>' +
            '<td class="center">' +
            '<button class="btn btn-danger broker-paid-delete">X</button>' +
            '</td>' +
            '</tr>';

        $('.broker-paid-table').append(htmlText);

        $('.broker-paid-delete').click(function () {
            $(this).parent().parent().remove();
        })

        $('input.addColumn1').click(function () {
            if (!$(this).closest('tr').next().length) {
                addColumnToTable1()
            }
        })
    }

    // other paid table
    $('.other-paid-delete').click(function () {
        $(this).parent().parent().remove();
    })

    $('input.addColumn2').click(function () {
        if (!$(this).closest('tr').next().length) {
            addColumnToTable2()
        }
    })

    function addColumnToTable2() {
        let htmlText = '';
        htmlText = '<tr class="text-center">' +
            '<!-- <td>1</td> -->' +
            '<td><input type="text" class="addColumn2"></td>' +
            '<td><input type="text" class="addColumn2"></td>' +
            '<td>' +
            '<select>' +
            '<option>choose an item</option>' +
            '<option>deliver to broker address</option>' +
            '<option>wire instructions to be provided</option>' +
            '<option>delivery instructions to be provided</option>' +
            '<option>to be net funded</option>' +
            '<option>delivery to lender address</option>' +
            '<option>free paid outside of closing</option>' +
            '<option>show as credited</option>' +
            '<option>delivery to loan servicer</option>' +
            '<option>payment differed until after closing</option>' +
            '</select>' +
            '</td>' +
            '<td class="center">' +
            '<button class="btn btn-danger other-paid-delete">X</button>' +
            '</td>' +
            '</tr>';

        $('.other-paid-table').append(htmlText);

        $('.other-paid-delete').click(function () {
            $(this).parent().parent().remove();
        })

        $('input.addColumn2').click(function () {
            if (!$(this).closest('tr').next().length) {
                addColumnToTable2()
            }
        })
    }
})